import passport from "passport";
import passport_local from "passport-local";
const LocalStrategy = passport_local.Strategy
import User from "../schema/User.js";

const loginStrategy = new LocalStrategy(async (username, password, done) => {
    console.log(username,password)
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
    console.log(username,password)
    try {
        const existingUser = await User.findOne({ username });
        console.log(existingUser)
        if (existingUser) {
        return done(null, null);
        }

    const newUser = {
        username,
        password: hashPassword(password),
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    };

    const createdUser = await User.create(newUser);
    req.user = username;
        done(null, createdUser);
    } catch (err) {
        console.log("Erro registrando usuario", err);
        done("Erro en registro", null);
    }
}
);


passport.use("register", registerStrategy);
passport.use("login", loginStrategy);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, done);
});

export {registerStrategy, loginStrategy}