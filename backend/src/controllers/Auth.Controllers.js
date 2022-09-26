export const register = (req, res) => {
    res.json('prueba')
}

// LOGIN

export const login = async (req, res) => {
    const {email, password} = req.body;
    console.log(password);
    res.json('hola pa');
}