const PhotoController = require('../controllers/photo-controller')

const router = require('express').Router();

router.get('/photos', PhotoController.findAll);

module.exports = router;