
import{ User } from '../models/Users.js';
import { encryptPassword } from "../utils/encryptPassword.js";

const register = async (req, res)=>{
    const{name,surname,email,password} = req.body;
    const UserFound = await User.findOne({ where: {email}});
        if (UserFound){
            return res.json({mensaje: "There is already a user with that email"});
        } if (!name|| !surname ||!email|| !password){
            return res.json({mensaje: "Missing name,surname, email, password"});  
        } else {
            //if (password !== confirmPassword){
            //return res.status(400).json("Las contraseñas no coinciden")
            //}
            const passwordHash =  await encryptPassword (password)
            
                    const nuevoUser= new User({
                        name,
                        surname,
                        email,
                        password: passwordHash,
                    });
                   const newUser = await nuevoUser.save()
                        res.json({mensaje: "User created successfully", newUser})
                    }}
                
        
       
    export default  register
