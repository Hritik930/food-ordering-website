const { generateToken } = require("../config/jwtProvider.js");
const userServices = require("../service/userService.js")
const bcrypt = require("bcrypt")

const register = async(req,res) => {
    try {
        const user = await userServices.createUser(req.body);
        const jwt = generateToken(user._id);
        // await cartServices.createCart(user);
        return res.status(201, user).send({jwt, message:"register success", user});
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


const login = async(req, res) => {
    const {password, email} = req.body;
    try {
        const user = await userServices.getUserByEmail(email);

        const isPasswordValid = bcrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(401).send({message:"invalid password"}
            )
            const jwt = generateToken(user._id);
            return res.status(200).send({jwt, message:"login success", user});
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {
    register,
    login
}