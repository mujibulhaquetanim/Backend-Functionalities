import passport from "passport";
import { Strategy } from "passport-local";
import { MockData } from "../mockDB";

interface User{
  id?: number,
  name?: string,
  email: string,
  password: string,
  isAdmin?: boolean
}

passport.serializeUser((user: User, done) => {
  done(null, user?.id);
});

passport.deserializeUser((id, done) => {
  try {
    const findUser = MockData.find((user) => user?.id === id);
    if (!findUser) throw new Error("user not found");
    done(null, findUser);
  } catch (error) {
    done(error, false);   
  }
});

export default passport.use(
  new Strategy(
    { usernameField: "email", passwordField: "password" },
    (email: string, password: string, done) => {
      try {
        const findUser = MockData.find((user) => user.email === email);
        if (!findUser) throw new Error("User not found");
        if (findUser.password !== password) throw new Error("Invalid credentials");
        done(null, findUser);
      } catch (error) {
        done(error, false);
      }
    }
  )
);