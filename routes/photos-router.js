const PhotoController = require('../controllers/photo-controller')
const router = require('express').Router();

router.get('/', PhotoController.findAll);
router.get('/:id', PhotoController.findById);
router.post('/', PhotoController.create);
router.delete('/:id', PhotoController.deletePhoto);
router.put('/:id', PhotoController.updatePhoto);


module.exports = router;