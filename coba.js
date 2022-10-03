// const {Photo, User} = require('./models/index')

// User.findByPk(1,  { include: [Photo] })
// .then((user) => {
// console.log(user)
// })
// .catch((err) => {
//     console.log(err)
// })  


const bcrypt = require('bcryptjs');

console.log(bcrypt.hashSync("yogi", 10));