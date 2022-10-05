const {Photo, User} = require('./../models/index')
const http = require('http')

class PhotoController{
    static findAll(req, res, next) {
        // Photo.findAll({include : [User]})
        console.log("findAll", req.user)
        Photo.findAll({where : {UserId : req.user.id}})
        .then((photos) => {
            // res.render('photos', { photos })
            res.status(200).json(photos)
        })
        .catch((error) => {
            next(error);
        })
    }

    // static findById(req, res){
    //     const {id} = req.params;
    //     Photo.findByPk(id, {include : [User]})
    //     .then((photos) => {
            // if (!photos) {
            //     throw {name: 'ErrorNotFound'}
            // }else {
            //     res.status(200).json(photos)
            // }
    //     })
        // .catch((error) => {
        //     if (error.name === 'ErrorNotFound') {
        //         res.status(404).json({ message: "Photo not found" })
        //     }else{
        //         res.status(500).json({ message: "internal server error" })
        //     }
        // })
    // }


    // Paka Async
    static async findById(req, res, next){
        const {id} = req.params;
        try {
            const photos = await Photo.findByPk(id, {include : [User]})
            if (!photos) throw {name: 'ErrorNotFound'}
            res.status(200).json(photos)
        } catch (error) {
            next(error);
        }
        
    }


    static create(req, res, next){
        const {title, image_url, UserId} = req.body;
        console.log(req.body);
        // if (!title) {
        //     res.status(400).json({ message: 'title cannot be empty' })
        // }
        Photo.create({title, image_url, UserId})
        .then((photos) => {
            res.status(201).json(photos)
        })
        .catch((error) => {
            next(error);
        })
    }

    static deletePhoto(req, res, next){
        Photo.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((photos) => {
            if (!photos) {
                throw {name: 'ErrorNotFound'}
            }else {
                res.status(202).json({ message:`Photo ${req.params.id} has been successfully deleted`})
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

    static updatePhoto(req, res){
        
    }
}

module.exports = PhotoController;