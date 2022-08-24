import passport from "passport";
import passport_local from "passport-local";
const LocalStrategy = passport_local.Strategy
import User from "../schema/User.js";
import hashPassword from "../utils/hashPassword.js";
import isValidPassword from "../utils/isInvalidPassword.js";

const loginStrategy = new LocalStrategy(async (username, password, done) => {
    try {
    const user = await User.findOne({ username });
        
    if (!user || !isValidPassword(password, user.password)) {
        return done(null, null);
    }

    done(null, user);
    } catch (err) {
    console.log("Error login", err);
    done("Error login", null);
    }
});


const registerStrategy = new LocalStrategy(
{ passReqToCallback: true },
async (req, username, password, done) => {
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
        return done(null, null);
        }

        const newUser = {
            username,
            password: hashPassword(password)
        };

        const createdUser = await User.create(newUser);
        req.user = username;
            done(null, createdUser);
        } catch (err) {
            done("Error en registro", null);
        }
}
);


passport.use("register", registerStrategy);
passport.use("login", loginStrategy);

passport.serializeUser((user, done) => {
    console.log("serealiza?")
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    console.log("deserealiza?")
    User.findById(id, done);
});

export {registerStrategy, loginStrategy}