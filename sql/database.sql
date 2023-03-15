CREATE DATABASE node_mysql_ts;

CREATE TABLE users(
    id: INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_spotify VARCHAR(200) NOT NULL,
    nombre_artista TEXT NOT NULL,
    fecha_busqueda TIMESTAMP DEFAULT CURRENT_TIME
);
DESCRIBE users;

   

