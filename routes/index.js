const PhotoController = require('../controllers/photo-controller')

const router = require('express').Router();

router.get('/photos', PhotoController.findAll);
router.get('/photos/:id', PhotoController.findById);
router.post('/photos', PhotoController.create);

module.exports = router;