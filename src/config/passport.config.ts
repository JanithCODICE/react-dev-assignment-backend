import { userRepository } from "../repository/user.repository";
import globalAppConfig from "./global-app-config";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

const jwtOptions = {
    secretOrKey: globalAppConfig.accessTokenSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

const jwtVerify = async (payload: any, done: any) => {
    try {
        if(payload.type !== "ACCESS" && payload.type !== "REFRESH") {
           throw new Error("Invalid token type");
        }

        const user = userRepository.findUserByEmailAndStatus(payload.email, 1);
        if(!user) {
            return done(null, false);
        }

        return done(null, user);
        
    }
    catch(err) {
        return done(err, false);
    }
}

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

export default jwtStrategy;