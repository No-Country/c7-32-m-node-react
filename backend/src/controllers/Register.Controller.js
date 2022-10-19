<<<<<<< HEAD

=======
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
import { User } from '../models/Users.js';
import { encryptPassword } from "../utils/encryptPassword.js";
import { cbu } from '../utils/generateCbu.js';
import { createCard } from '../utils/generateCard.js';

const register = async (req, res) => {
    const { name, surname, email, password } = req.body;
    const UserFound = await User.findOne({ where: { email } });
    if (UserFound) {
        return res.json({ mensaje: "La direccion de mail ya fue usada" });
    } if (!name || !surname || !email || !password) {
        return res.json({ mensaje: "No encuentra nombre, apellido, email, contraseña" });
    } else {
        //if (password !== confirmPassword){
        //return res.status(400).json("Las contraseñas no coinciden")
        //}
<<<<<<< HEAD
        const passwordHash = await encryptPassword(password)
=======
        const passwordHash = await encryptPassword(password);

>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224

        const nuevoUser = new User({
            name,
            surname,
            email,
            password: passwordHash,
<<<<<<< HEAD
        });
        const newUser = await nuevoUser.save()

        const checkUser = await User.findOne({ where: { email }});
        res.json({ mensaje: "Se creo el usuario de forma exitosa", newUser, checkUser });
=======
            cbu
        });
        const newUser = await nuevoUser.save();
        const cardUser = await createCard(newUser.id, newUser.name , newUser.surname);
        const userUpdated = await User.update({
            card_id: cardUser.id
          }, {
            where: {
              id: newUser.id
            }
          })
        const checkUser = await User.findOne({ where: { email }});
        res.json({ mensaje: "Se creo el usuario de forma exitosa",checkUser });
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
    }
}

export default register;
