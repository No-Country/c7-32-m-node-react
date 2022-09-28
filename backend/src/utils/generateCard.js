import { Card } from "../models/Cards.js";
// import {cbu} from '../utils/generateCbu.js';

export const createCard = async (name, surname) => {

    // create card
    const cvv = Math.floor(Math.random() * (999 - 100) + 100);
    const issue_date = new Date(); 
    const exp_date = new Date(`${issue_date.getFullYear() + 10}`);
    const number ="4" + Math.floor("03434" + ("0000989800" + (Math.random()*9999999|0)).slice(-11))

    try {
        return await Card.create({
            name,
            surname,
            number,
            exp_date,
            issue_date,
            cvv
        })
    } catch (error) {
        return error.message
    }
}