import { Card } from "../models/Cards.js";
import { User } from "../models/Users.js";

// CREATE CARD

export const createCardExternal = async (req, res) => {
    const {id} = req.params;
    const {name, surname, number, exp_date, issue_date, cvv} = req.body;

    try {
        // validate if the user exist
        const userFound = await User.findByPk(id);
        if(!userFound) {
            return res.status(400).json({message: "Usuario no encontrado"});
        }
        const cardFound = await Card.findOne({where: { number: number }});

        if(cardFound) {
            res.status(400).json({message: "La tarjeta ya está agregada"});
        }

        if(!name || !surname || !number || !exp_date || !issue_date || !cvv){
            return res.status(400).json({message: "Complete todos los datos"});
        }

        if( number.toString().length !== 16 || isNaN(parseInt(number))) {
            return res.status(400).json({message: "Número de tarjeta inválido"});
        }

        if(issue_date.toString().length <= 3 || exp_date.toString().length <= 3) {
            return res.status(400).json({message: "Fechas inválidas"})
        }


        if ((new Date(issue_date) - new Date(exp_date)) > 0 ) {
            return res.status(400).json({message: "Fechas de creación inválida"})
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
            issue_date: new Date(issue_date),
            cvv,
            idUser: id
        })



        return res.json({message: "Tarjeta añadida"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }

} 