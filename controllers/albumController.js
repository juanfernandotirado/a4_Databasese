const { cp } = require('../db/connection.js');

const mysql = require('mysql');

exports.getAlbums = (req, res) => {

     let sql = `SELECT *
     FROM album`

     cp.query(sql, (error, result) => {
          if (error) {
               res.send('Error:' + error)

          } else {

               res.send(result)
          }
          console.log(result);
     })
}


exports.postAlbums = (req, res) => {

     let newAlbumName = req.body.name
     let newAlbumGenre = req.body.genre

     let sql = `INSERT INTO album (name, genre) 
          VALUES (${mysql.escape(newAlbumName)}, ${mysql.escape(newAlbumGenre)}     
          );`

     cp.query(sql, (error, result) => {
          if (error) {
               res.send('Error:' + error)

          } else {

               res.send('New Album Created!')
          }

     })

     console.log(newAlbumName);

}

