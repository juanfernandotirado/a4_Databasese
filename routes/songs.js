const express = require("express");
const router = express.Router();

const { getSongs, getAlbumSongs, postSongs } = require('../controllers/songsController.js')

router.get('/', getSongs )

router.get('/album-songs', getAlbumSongs )

router.post('/', postSongs)

module.exports.songsRouter = router;