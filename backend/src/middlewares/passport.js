import {Strategy, ExtractJwt} from 'passport-jwt';
import { User } from '../models/Users.js';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.PASSWORD_TOKEN
}

export default new Strategy(opts, async (payload, done) => {
    try {
        const userFound = await User.findByPk(payload.id);
        if(userFound){
            return done(null, userFound)
        }

        return done(null, false);
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
});