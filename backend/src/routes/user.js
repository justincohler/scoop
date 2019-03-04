const express = require('express');
const secured = require('./middleware/secured');
const router = express.Router();
const { Company } = require('../models/company');
const { upload } = require('./upload_file');


/* GET user profile. */
router.get('/user', secured(), function (req, res, next) {
    const { _raw, _json, ...userProfile } = req.user;
    res.json(userProfile);
});


router.post('/submit_user', upload.array('ads'), async function (req, res, next) {
    try {
        let {username, password} = req.body; 
       req.files.forEach((file) => {
            company.ads.push({ location: file.location });
        });

        company.markModified('ads');
        await company.save();
        res.sendStatus(200);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

module.exports = router;