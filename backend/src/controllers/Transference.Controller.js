import {User} from '../models/Users.js';
import {Deposit} from '../models/Deposit.js';

export const postTransf = async (req, res) => {
    try {
        const {userId} = req.params;
    const {cbu, amount, reason} = req.body;

    if(!userId) {
        return res.status(400).json({message: "ID del usuario Inválido"});
    }

    if(!cbu, !amount) {
        return res.status(400).json({message: "Los campos Cbu y Monto son inválidos"});
    }

    if(cbu.toString().length !== 22 ) {
        return res.status(400).json({message: "Cbu inválido"})
    }

    if(parseInt(amount) > 10000) {
        return res.status(400).json({message: "Monto inválido"});
    }

    const userTransferring = await User.findByPk(userId);
    
    if(!userTransferring) {
        return res.status(400).json({message: "ID del usuario que transfiere, inválido"});
    }

   const searchCbu = await User.findOne({where: {cbu}});
   
   if(!searchCbu) {
    return res.status(400).json({message: "El cbu al que desea enviar plata es inválido"});
   }

  const deposit =  await Deposit.create({
    user_id: searchCbu.id,
    user_transferring: [{
        id: userId,
        cbu: userTransferring.cbu,
        reason,
        amount
    }]
   });

   const b = await User.update(
    {
        amount: +amount
    },
    {
        where: {
            id: searchCbu.id
        }
    });

  const a = await User.update(
    {
        amount: -amount
    },
    {
        where: {
            id: userId
        }
    }
   );

   console.log(deposit, a, b);

   
   res.json({message: "¡Transferencia exitosa!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }




    
}