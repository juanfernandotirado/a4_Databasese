const {cp} = require('./connection.js');

const pMySQL = require('./promise-mysql');



pMySQL.query(cp, `DROP TABLE IF EXISTS song; 
DROP TABLE IF EXISTS album;
DROP VIEW IF EXISTS songs_on_albums; 
CREATE TABLE album (album_id int AUTO_INCREMENT, name varchar(255) NOT NULL, genre varchar(255), PRIMARY KEY (album_id))
;`)
.then(()=>pMySQL.query(cp, `CREATE TABLE song (song_id int AUTO_INCREMENT, name varchar(255) NOT NULL, album_id int,
PRIMARY KEY (song_id),
CONSTRAINT albumForeingKey 
FOREIGN KEY(album_id) REFERENCES album (album_id) 
ON UPDATE SET NULL)
;`))
.then(()=>pMySQL.query(cp, `CREATE VIEW songs_on_albums AS 
SELECT album.name AS album_name, song.name AS song_name, song.album_id AS album_id
FROM song
LEFT JOIN album
ON song.album_id = album.album_id
WHERE song.album_id IS NOT NULL
;`))
.then(results=>{console.log(results);process.exit() })
.catch(error=>{console.log(error); process.exit()});