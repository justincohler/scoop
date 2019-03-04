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


router.post('/files', async function (req, res, next) {
    const {username, password} = req.body;
    try 
    {
        let user = await Company.findByUserPass(username, password);
        if (!user)
        {
            res.sendStatus(404);
        } else 
            res.json(user.ads);
    }catch (e)
    {
        res.sendStatus(400);
    }
})

router.post('/submit_user', upload.array('ads[]'), async function (req, res, next) {
    console.log("GOT HERE!")
    try {
        let { username, password } = req.body;
        req.files.forEach((file) => {
            req.user.ads.push({ location: file.location });
        });

        req.user.markModified('ads');
        await req.user.save();
        res.sendStatus(200);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
});

router.post('/login_user', async function (req, res, next) {
    try {
        company = await Company.findOne({ username: req.body.username });
        if (company == null)
            return res.sendStatus(404);
        else if (company.password != req.body.password) {
            res.sendStatus(404);
        } else {
            res.sendStatus(200);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
});

module.exports = router;