import { Card } from "../models/Cards.js";
import { User } from "../models/Users.js";

// CREATE CARD

export const createCardExternal = async (req, res) => {
    const {id} = req.params;
    const {name, surname, number, exp_date, cvv} = req.body;

    console.log(name, surname, number, exp_date, cvv);

    try {
        // validate if the user exist
        const userFound = await User.findByPk(id);
        if(!userFound) {
            return res.status(400).json({message: "Usuario no encontrado"});
        }
        const cardFound = await Card.findOne({where: { number }});

        if(cardFound) {
            return res.status(400).json({message: "La tarjeta ya está agregada"});
        }

        if(!name || !surname || !number || !exp_date || !cvv){
            return res.status(400).json({message: "Complete todos los datos"});
        }

        if( number.toString().length !== 16) {
            return res.status(400).json({message: "Número de tarjeta inválido"});
        }

        if(exp_date.toString().length <= 3) {
            return res.status(400).json({message: "Fechas inválidas"})
        }


        if((new Date(exp_date) - new Date()) < 0) {
            return res.status(400).json({message: "Fecha de vencimiento inválido"});
        }

        if(cvv.toString().length !== 3 || isNaN(parseInt(cvv))) {
            return res.status(400).json({message: "Cvv inválido"});
        } 

        

        const cardCreated = await Card.create({
            name,
            surname,
            number,
            exp_date: new Date(exp_date),
            cvv,
            id_user: id
        })


        return res.json({message: "Tarjeta añadida", card: cardCreated});
    } catch (error) {
        res.status(500).json({message: error.message})
    }

} 

// GET ALL CARDS OF ONE USER

export const getCardsOfUser = async (req, res) => {
    try {
        const {id} = req.params;

    const cardsUser = await Card.findAll({where: {id_user: id}});


    res.json({cards: cardsUser})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} 

// Delete Card
export const deleteCardsOfUser = async (req, res) => {
    try {
        const {idCard, idUser} = req.params;

        const cardsUser = await Card.destroy({where: {id : idCard}});
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}