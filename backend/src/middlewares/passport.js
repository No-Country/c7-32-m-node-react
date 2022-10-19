import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from '../models/Users.js';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.PASSWORD_TOKEN
}

export const passportMiddleware = new Strategy(opts, async (payload, done) => {
    try {
        const userFound = await User.findByPk(payload.id);
        if (userFound) {
            return done(null, userFound)
        }

        return done(null, false);
    } catch (error) {
        throw new Error(error.message)
    }
});
