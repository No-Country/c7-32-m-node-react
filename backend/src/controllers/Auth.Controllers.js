// imports
import jwt from "jsonwebtoken";
import {User} from '../models/Users.js';
import { comparePassword } from "../utils/encryptPassword.js";

// LOGIN

export const login = async (req, res) => {
   res.json('prueba');
}