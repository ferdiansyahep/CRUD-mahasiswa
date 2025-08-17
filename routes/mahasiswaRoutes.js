const express = require('express')
const router = express.Router()
const mahasiswa = require('../controllers/mahasiswaController')

router.get('/', mahasiswa.getAll)
router.get('/:nim', mahasiswa.getByNim)
router.post('/', mahasiswa.create)
router.put('/', mahasiswa.update)
router.delete('/', mahasiswa.remove)

module.exports = router;