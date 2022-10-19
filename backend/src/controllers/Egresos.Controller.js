import { User } from "../models/Users.js";
import {Egresos} from '../models/Egresos';

export const Egreso = async (req, res) => {

   try {
    const {amount, reason} = req.body;

    const {idUser} = req.params;

    const userFound = await User.findByPk(idUser);

    
    if(!userFound) {
        return res.status(400).json({message: "El usuario no existe"});
    }
    
    if(!amount || parseInt(amount) <= 0 || userFound.amount< amount){
        return res.status(400).json({message: "Saldo insuficiente"})
    }

    await User.update({
        amount: (userFound.amount - parseInt(amount))
    },{
        where: {
            id: userFound.id
        }
    });

    const Egreso = await Egresos.create({
        user_id: userFound.id,
        user_amount: amount,
        reason: reason
    });


    res.json({message: "Egreso Completado", Egreso});
   } catch (error) {
    return res.status(500).json({message: error.message});
   }
}