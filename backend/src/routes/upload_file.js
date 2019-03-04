const express = require('express');

const aws = require('aws-sdk');
const multer = require('multer')
const multerS3 = require('multer-s3')
const {Company} = require('../models/company');
const secured = require('./middleware/secured');

const router = express.Router();
const s3 = new aws.S3();

let put_user = async (req) => 
{
  let {username, password} = req.body; 
  let company = await Company.findByUserPass(username, password);
  if (!company)
  {
    company = await Company.create(req.body);
  }
  req.user = company;
}

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'uchicagoscoop',
    metadata: async function (req, file, cb) {
     if (!req.user)
      await put_user(req);
     cb(null, { fieldName: `${req.user.username}/${file.originalname}` });
    },
    key: async function (req, file, cb) {
    if (!req.user)
      await put_user(req);

    cb(null, `${req.user.username}/${file.originalname}`);
    }
  })
});

router.post('/upload', secured(), upload.array('ads'), async function (req, res, next) {
  req.user.company.uploaded_ads.push({ location: req.file.location });
  req.user.company.markModified('uploaded_ads');
  try {
    await req.user.company.save();
    // res.send(`Successfully uploaded file at ${req.file.location}!`);
  } catch (e) {
    res.sendStatus(400);
  }
});

module.exports = { router, upload }