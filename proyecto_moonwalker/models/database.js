// Importamos el modulo mysql2
const mysql = require('mysql2');

// Se declara un objeto y luego se le pasa como parametro a la función  createConnection del modulo mysql
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'loboartic',
	password: '9510',
	database: 'moonwalker_dev'
});

// Se establece la conexción con la base de datos de esta manera
connection.connect((err) => {
	if (err) throw err;
	// Si error no arroja un error procedemos a continuar
	console.log('Connected to MySQL');

	// Se procede a crear una tabla con los datos si no existe
	const createTableQuery = `
	  CREATE TABLE IF NOT EXISTS contacts (
	    id INT AUTO_INCREMENT PRIMARY KEY,
	    email VARCHAR(255) NOT NULL,
	    name VARCHAR(255) NOT NULL,
	    comment TEXT NOT NULL,
	    ip VARCHAR(255) NOT NULL,
	    timestamp DATETIME NOT NULL
	  )
	`;

	// Hacemos un query a createTableQuery
	connection.query(createTableQuery, (err, result) => {
	  if (err) throw err;
	  console.log('Contacts table created or already exists');
	});
});

// Exportamos la conexión
module.exports = connection;
