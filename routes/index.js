const express = require('express')
const router = express.Router()

const {albumsRouter} = require("./albums.js")
const {songsRouter} = require("./songs.js")

router.use('/albums', albumsRouter)
router.use('/songs', songsRouter)


exports.routerIndex = router;