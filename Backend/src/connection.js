const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'complejodecabañas',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conectado correctamente');
  }
});

module.exports = connection;