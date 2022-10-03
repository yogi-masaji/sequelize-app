const {User} = require('../models/index');
class UsersController {
    static signIn(req, res){
        res.status(200).json({message: 'sign in'})
    }
    
    static async signUp(req, res){
        const { username, email, password } = req.body;
        try {
            const user = await User.create({ username, email, password });
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError'){
                res.status(400).json({ message: "bad request" })
            } else {
                res.status(500).json({message: "internal server error"})
            }
        }
    }
}

module.exports = UsersController;