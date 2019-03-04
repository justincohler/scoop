const mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
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
    address: {
        type: String,
        trim: true
    },
    zipCode: {
        type: String,
        trim: true
    },
    industry: {
        type: String,
        trim: true
    },
    companyDescription: {
        type: String,
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    priorities: {
        type: Number,
        min: 1,
        max: 5
    },
    budget: {
        type: Number,
        min: 0
    }
    uploaded_ads: [{
        location: {
            type: String,
            required: true
        }
    }],
    apiTokens: [{
        serviceName: {
            type: String,
            trim: true
        },
        token: {
            type: String,
            trim: true
        }
    }]
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
    const user_company = await Company.findOne({ authID });
    return user_company;
}

var Company = mongoose.model('Company', CompanySchema);

module.exports = { Company };