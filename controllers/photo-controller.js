const {Photo, User} = require('./../models/index')

class PhotoController{
    static findAll(req, res) {
        Photo.findAll({include : [User]})
        .then((photos) => {
            res.render('photos', { photos })
        })
        .catch((error) => {
            res.send('error')
        })
    }
}

module.exports = PhotoController;