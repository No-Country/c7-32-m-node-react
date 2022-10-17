import { User } from "../models/Users.js";
import { Ingreso } from '../models/Ingreso.js';

export const Ingress = async (req, res) => {
  try {
    const { amount } = req.body;
    const { idUser } = req.params;
    const userFound = await User.findByPk(idUser);

    if (!userFound) {
      return res.status(400).json({ message: "El usuario no existe" });
    }

    if (!amount || parseInt(amount) <= 0 || parseInt(amount) > 10000) {
      return res.status(400).json({ message: "Monto inválido" })
    }

    await User.update({
      amount: (userFound.amount + parseInt(amount))
    }, {
      where: {
        id: userFound.id
      }
    });

    const Ingress = await Ingreso.create({
      user_id: userFound.id,
      user_amount: amount
    });

    res.json({ message: "Ingreso Completado", Ingress });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
