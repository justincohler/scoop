const express = require('express');

const aws = require('aws-sdk');
const multer = require('multer')
const multerS3 = require('multer-s3')

const secured = require('./middleware/secured');

const router = express.Router();
const s3 = new aws.S3();
 
let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'uchicagoscoop',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: `${req.user.auth_user.user_id}_${file.originalname}`});
    },
    key: function (req, file, cb) {
      cb(null, `${req.user.auth_user.user_id}/${file.originalname}`);
    }
  })
});
 
router.post('/upload', secured(), upload.single('ad'), async function(req, res, next) {
    req.user.company.uploaded_ads.push({location : req.file.location});
    req.user.company.markModified('uploaded_ads');
    try {
        await req.user.company.save();
        // res.send(`Successfully uploaded file at ${req.file.location}!`);
    }catch (e)
    {
        res.sendStatus(400);
    }
});

module.exports = router;