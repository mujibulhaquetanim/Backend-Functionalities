import passport from "passport";
import { Strategy } from "passport-local";


passport.use(new Strategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
    console.log(email, password);
    done(null, email);
}))