import { Card } from "../models/Cards.js";
<<<<<<< HEAD
import {cbu} from '../utils/generateCbu.js';
=======
import { cbu } from '../utils/generateCbu.js';
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224

export const createCard = async (id, name, surname) => {

    // create card
    const cvv = Math.floor(Math.random() * (999 - 100) + 100);
    const issue_date = new Date();
    const exp_date = new Date(`${issue_date.getFullYear() + 10}`);
<<<<<<< HEAD
<<<<<<< HEAD

    return newCard = await Card.create({
        name,
        surname,
        number: cbu,
        exp_date,
        issue_date,
        cvv
    })
}
=======
=======
>>>>>>> IM_BK_wallet

    console.log(issue_date, exp_date);

    try {
        return await Card.create({
            name,
            surname,
            number: cbu,
            exp_date,
            issue_date,
            cvv,
            id_user: id
        })
    } catch (error) {
        return error.message;
    }
<<<<<<< HEAD
}
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
=======
}
>>>>>>> IM_BK_wallet
