import passport from "passport";
import { Strategy } from "passport-local";
import { MockData } from "../mockDB";

export default passport.use(new Strategy(
  { },
  (email: string, password: string, done: (error: any, user?: any, options?: { message: string }) => void) => {
    console.log(`email: ${email}, password: ${password}`);
    
    try {
      const user = MockData.find((user) => user?.email === email);

      if (!user) throw new Error("user not found");
      if (user.password !== password) throw new Error("Invalid credentials");

      done(null, user);

    } catch (error) {
      done(error, false);
    }
  }
))