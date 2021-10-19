const { Router } = require('express');
const router = Router();
const multer = require('multer');
const { crearFoto, MostrarFotos } = require('../controllers/Foto');
// Create
router.post('/new', crearFoto);

const storage = multer.diskStorage({
	destination: 'album/',
	filename: function (req, file, cb) {
		console.log(file);
		cb('', Date.now() + '-' + file.originalname);
	},
});

const upload = multer({
	storage: storage,
});

router.post('/files', upload.single('foto'), crearFoto);
router.get('/',MostrarFotos)

module.exports = router;
