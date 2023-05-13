// Importación de mysql
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '',
	user: '',
	password: '',
	database: ''
}); 

// Extablecer coneción
connection.connect((err) => {
	if (err) throw err:
	console.log('¡Conección establecida con exito!');
});

const saveComments = (callback) => {

};

// Guardar comentarios
const viewComments = (callback) => {
	connection.query('SELECT * FROM comentarios', (err, rows, fields) => {
		if (err) return callback (err, null);
		callback(null, rows);
	});
};



module.exports = {
	saveComments,
	viewComments
};