const express = require('express');
const secured = require('./middleware/secured');
const router = express.Router();
const { Company } = require('../models/company');


/* GET user profile. */
router.get('/user', secured(), function (req, res, next) {
    const { _raw, _json, ...userProfile } = req.user;
    res.json(userProfile);
});

router.post('/submit_user', async function (req, res, next) {
    console.log(req.body);

    try {
        let company = new Company(req.body.form);
        console.log(company);
        await company.save();
        res.sendStatus(200);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

module.exports = router;