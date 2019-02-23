// Load Passport
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// Load environment variables from .env
const dotenv = require('dotenv');
dotenv.config();

module.exports = (app) => {
    
    // config express-session
    var sess = {
        secret: 'asjdf762314gahjsdf7cxv8hyu21g47',
        cookie: {},
        resave: false,
        saveUninitialized: true
    };
    
    if (app.get('env') === 'production') {
        sess.cookie.secure = true; // serve secure cookies, requires https
    }
    
    app.use(session(sess));
    
    // Configure Passport to use Auth0
    const strategy = new Auth0Strategy(
        {
            domain: process.env.AUTH0_DOMAIN,
            clientID: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            callbackURL:
            process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
        },

        function (accessToken, refreshToken, extraParams, profile, done) {
            // accessToken is the token to call Auth0 API (not needed in the most cases)
            // extraParams.id_token has the JSON Web Token
            // profile has all the information from the user
            return done(null, profile);
        }
    );

    passport.use(strategy);

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
}