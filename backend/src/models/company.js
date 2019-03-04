const mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
    // authID: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // TODO REMOVE
    username: {
        type: String,
        trim: true, 
        minlength: 6
    },
    password: {
        type: String,
        trim: true,
        minlength: 6
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
    city: {
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
    businessDescription: {
        type: String,
        trim: true,
        // minlength: 100
    },
    customerDescription: {
        type: String,
        trim: true,
        // minlength: 100
    },
    link1: {
        type: String,
        trim: true
    },
    link2: {
        type: String,
        trim: true
    },
    budget: {
        type: Number,
        min: 0
    },
    ads: [{
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

CompanySchema.statics.findByUserPass = async function (username, password) {
    const Company = this;
    const user_company = await Company.findOne({ username, password });
    return user_company;
}


CompanySchema.statics.findByAuthID = async function (authID) {
    const Company = this;
    const user_company = await Company.findOne({ authID });
    return user_company;
}

var Company = mongoose.model('Company', CompanySchema);

module.exports = { Company };