const express = require('express')
const router = express.Router()
const mahasiswa = require('../controllers/mahasiswaController')

router.get('/', mahasiswa.getAll)
router.get('/:nim', mahasiswa.getByNim)
router.post('/', mahasiswa.create)

module.exports = router;