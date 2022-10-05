const { verify } = require('../helpers/jwt')
const {User} = require('../models/index')

async function authMiddleware(req, res, next) {
    const {authorization} = req.headers;
    token = authorization.split("Bearer ");
    

    try {
        if(token.length !== 2) throw { name : 'invalidToken' }
        const {id, email} = verify(token[1]);
        const user = await  User.findOne({ where: { id, email } });
        if (!user) throw {name: 'Unauthorized'}
        req.user = {id, email}; 
        next();     
    } catch (error) {
        next(error);
    }
}

module.exports = authMiddleware;