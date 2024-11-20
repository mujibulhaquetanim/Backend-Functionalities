import { Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import Strategy from "passport-magic-login"
import { AuthService } from "../auth.service";

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy) {
    //instead of using SMTP,i am using a logger to send the magic link
    private readonly logger = new Logger(MagicLoginStrategy.name);

    constructor(private authService: AuthService){
        super({
            secret: "aayin",
            jwtOptions: {expiresIn: "20m"},
            callbackUrl: "http://localhost:3000/api/auth/callback",
            sendMagicLink: async (destination, href) => this.logger.debug(`Magic link sent to ${destination}: ${href}`),
            verify: async (payload, callback) => {
                //it will be called when the magic link is clicked
                callback(null, this.validate(payload))
            }
        })
    }

    validate(payload: {destination: string}){
        //validate email, user exists or not
        const user = this.authService.validateUser(payload.destination);
        return user
    }
}