const bcrypt = require('bcryptjs');

function hash(input) {
    return bcrypt.hashSync(input, 10);
}

module.exports = {
    hash
};