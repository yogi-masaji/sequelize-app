const {Photo, User} = require('./../models/index')
const http = require('http')

class PhotoController{
    static findAll(req, res) {
        // Photo.findAll({include : [User]})
        Photo.findAll()
        .then((photos) => {
            // res.render('photos', { photos })
            res.status(200).json(photos)
        })
        .catch((error) => {
            res.status(500).json({ message: "internal server error" })
        })
    }

    static findById(req, res){
        const {id} = req.params;
        Photo.findByPk(id, {include : [User]})
        .then((photos) => {
            if (!photos) {
                throw {name: 'ErrorNotFound'}
            }else {
                res.status(200).json(photos)
            }
        })
        .catch((error) => {
            if (error.name === 'ErrorNotFound') {
                res.status(404).json({ message: "Photo not found" })
            }else{
                res.status(500).json({ message: "internal server error" })
            }
        })
    }

    static create(req, res){
        const {title, caption, image_url, UserId} = req.body;
        console.log(req.body);
        Photo.create({title, caption, image_url, UserId})
        .then((photos) => {
            res.status(201).json(photos)
        })
        .catch((error) => {
            res.status(500).json({ message: "internal server error" })
        })
    }
}

module.exports = PhotoController;