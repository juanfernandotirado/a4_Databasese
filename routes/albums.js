const express = require("express");
const router = express.Router();

const { getAlbums, postAlbums } = require('../controllers/albumController.js')


router.get('/', getAlbums)

//////////////////////////////////

router.post('/', postAlbums)



module.exports.albumsRouter = router;