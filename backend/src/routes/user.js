const express = require('express');
const secured = require('./middleware/secured');
const router = express.Router();

/* GET user profile. */
router.get('/user', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  res.json(userProfile);
});

router.post('/update', secured(), async function (req, res, next) {
    let {company} = req.user;
    let {description, companyName} = req.body;
    company.description = description;
    company.companyName = companyName;
    try {
        await company.save(); 
        res.sendStatus(200);
    } 
    catch (e) {
        res.sendStatus(400);
    }
})

module.exports = router;