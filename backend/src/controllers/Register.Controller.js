import { User } from '../models/Users.js';
import { encryptPassword } from "../utils/encryptPassword.js";
import { cbu } from '../utils/generateCbu.js';
import { createCard } from '../utils/generateCard.js';

const register = async (req, res) => {
	try {
		const { name, lastName, email, password } = req.body;
		const UserFound = await User.findOne({ where: { email } });
		if (UserFound) {
			return res.json({ mensaje: "La direccion de mail ya fue usada" });
		} if (!name || !lastName || !email || !password) {
			return res.json({ mensaje: "No encuentra nombre, apellido, email, contraseña" });
		} else {
			//if (password !== confirmPassword){
			//return res.status(400).json("Las contraseñas no coinciden")
			//}
			const passwordHash = await encryptPassword(password);


			const nuevoUser = new User({
				name,
				surname: lastName,
				email,
				password: passwordHash,
				cbu
			});
			const newUser = await nuevoUser.save();
			const cardUser = await createCard(newUser.id, newUser.name, newUser.surname);
			const userUpdated = await User.update({
				card_id: cardUser.id
			}, {
				where: {
					id: newUser.id
				}
			})
			const checkUser = await User.findOne({ where: { email } });
			res.json({ mensaje: "Se creo el usuario de forma exitosa", checkUser });
		}
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ message: err.message })
	}
}

export default register;
