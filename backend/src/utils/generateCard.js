import { Card } from "../models/Cards.js";
import {cbu} from '../utils/generateCbu.js';

export const createCard = async (id, name, surname) => {

    // create card
    const cvv = Math.floor(Math.random() * (999 - 100) + 100);
    const issue_date = new Date(); 
    const exp_date = new Date(`${issue_date.getFullYear() + 10}`);

    return await Card.create({
        name,
        surname,
        number: cbu,
        exp_date,
        issue_date,
        cvv,
        id_user: id
    })
}