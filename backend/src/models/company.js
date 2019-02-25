const mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema( {
    authID: {
        type: String,
        required: true,
        unique: true
    },
    companyName: {
        type: String,
        trim: true,
        minlength: 1
    },
    companyDescription: {
        type: String, 
        trim: true
    },
},
{ usePushEach: true }
);
// the usePush each just fixes a bug with updates arrays if we decide to use as an attribute

CompanySchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject['authID'];
    return userObject;
};

CompanySchema.statics.findByAuthID = async function (authID) {
    const Company = this;
    const user_company = await Company.findOne({authID});
    return user_company;
} 

var Company = mongoose.model('Company', CompanySchema);

module.exports = {Company};