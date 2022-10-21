import { User } from '../models/Users.js';
import { Transfers } from '../models/Transfers.js';

export const postTransf = async (req, res) => {
  try {
    const { userId } = req.params;
    const {transfer} = req.body;

    if (!userId) {
      return res.status(400).json({ message: "ID del usuario Inválido" });
    }

    if (!transfer.cbu, !transfer.amount) {
      return res.status(400).json({ message: "Los campos Cbu o Monto son inválidos" });
    }

    if (transfer.cbu.toString().length !== 22) {
      return res.status(400).json({ message: "Cbu inválido" })
    }

    if (parseInt(transfer.amount) > 10000) {
      return res.status(400).json({ message: "Monto demasiado elevado" });
    }

    const userTransferring = await User.findByPk(userId);

    if (!userTransferring) {
      return res.status(400).json({ message: "ID del usuario que transfiere, inválido" });
    }

    if (userTransferring.amount === 0 || transfer.amount > userTransferring.amount) {
      return res.status(400).json({ message: "No tiene dinero suficiente" });
    }

    const searchCbu = await User.findOne({ where: { cbu: transfer.cbu } });

    //    if Cbu doesn't exist in database, they send money to another count outside of wen wallet
    if (!searchCbu) {

      const deposit = await Transfers.create({
        user_id: null,
        user_transferring_id: userTransferring.id,
        user_transferring_cbu: userTransferring.cbu,
        user_transferring_reason: transfer.reason,
        user_transferring_amount: transfer.amount
      });

      await User.update(
        {
          amount: (userTransferring.amount - transfer.amount)
        },
        {
          where: {
            id: userId
          }
        }
      );

      return res.json({ message: "¡Transferencia exitosa!" });
    }

    //    if the user deposit in another user of wen wallet

    const deposit = await Transfers.create({
      user_id: searchCbu.id,
      user_transferring_id: userTransferring.id,
      user_transferring_cbu: userTransferring.cbu,
      user_transferring_reason: reason,
      user_transferring_amount: amount
    });

    await User.update(
      {
        amount: (searchCbu.amount + amount)
      },
      {
        where: {
          id: searchCbu.id
        }
      });

    await User.update(
      {
        amount: (userTransferring.amount - amount)
      },
      {
        where: {
          id: userId
        }
      }
    );

    res.json({ message: "¡Transferencia exitosa!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
