const { cp } = require('../db/connection.js');

const mysql = require('mysql');

exports.getSongs = (req, res) => {
    let sql = `SELECT album.name AS album_name, song.name AS song_name
    FROM song
    
    LEFT JOIN album
    ON song.album_id = album.album_id

    ;`

    cp.query(sql, (error, result) => {
        if (error) {
            res.send('Error:' + error)

        } else {

            res.send(result)
        }
        console.log(result);
    })
}


exports.getAlbumSongs = (req, res) => {
    
    let sql = `SELECT * 
    FROM songs_on_albums;`

    cp.query(sql, (error, result) => {
        if (error) {
            res.send('Error:' + error)

        } else {

            res.send(result)
        }

    })

}


exports.postSongs = (req, res) => {
    let newSongName = req.body.name
    let newSongAlbumId = req.body.album_id
    if(newSongAlbumId == 0){
        newSongAlbumId = null
    }

    let sql = `INSERT INTO song ( album_id, name) 
        VALUES ( ${mysql.escape(newSongAlbumId)}, ${mysql.escape(newSongName)}
        );`

    cp.query(sql, (error, result) => {
        if (error) {
            res.send('Error:' + error)

        } else {

            res.send('New Song Created!')
        }

    })

    console.log(req.body);
}