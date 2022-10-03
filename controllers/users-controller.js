const {User} = require('../models/index');
const {compare} = require('../helpers/hash')
class UsersController {
    static async signIn(req, res){
        const {email, password} = req.body;
        try {
            const user = await User.findOne({where : {email}});
            if (!user) throw {name: 'EmailNotFound'};
            if (!compare(password, user.password)) throw {name: 'WrongPassword'};
            res.status(200).json(user)
        } catch (error){
            if (error.name === 'EmailNotFound' || error.name === 'WrongPassword'){
                res.status(401).json({message: 'Wrong email or password'});
            } else{
                res.status(500).json({message: "internal server error"});
            }
        }
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