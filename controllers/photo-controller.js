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
    static async findById(req, res){
        const {id} = req.params;
        try {
            const photos = await Photo.findByPk(id, {include : [User]})
            if (!photos) throw {name: 'ErrorNotFound'}
            res.status(200).json(photos)
        } catch (error) {
            if (error.name === 'ErrorNotFound') {
                res.status(404).json({ message: "Photo not found" })
            }else{
                res.status(500).json({ message: "internal server error" })
            }
        }
        
    }


    static create(req, res){
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
            if (error.name  === 'SequelizeValidationError') {
                const errorValidation = error.errors.map((error)=>{
                    return error.message;
                })
                return res.status(400).json({ message: errorValidation })
            } else if (error.name  === 'SequelizeForeignKeyConstraintError'){
                return res.status(400).json({ message: "user does not exist" })
            } else {
                res.status(500).json({ message: error })
            }
        })
    }

    static deletePhoto(req, res){
        Photo.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((photos) => {
            if (!photos) {
                throw {name: 'ErrorNotFound'}
            }else {
                res.status(202).json({ message:"Photo has been successfully deleted"})
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
}

module.exports = PhotoController;