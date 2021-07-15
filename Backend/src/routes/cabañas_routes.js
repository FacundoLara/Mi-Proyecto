const express = require('express');
const connection = require('../connection');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Prueba'});
});

/* router.get('/', (req, res) => {
  const sql = `SELECT cabañas.*, estado_cabañas.nombre AS estado
               FROM cabañas, estado_cabañas
               WHERE cabañas.id_Estado_Cab = estado_cabañas.id
               ORDER BY cabañas.id`;

  connection.query(sql, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ message: 'Error al obtener las cabañas', data: [] });
    } else {
      res.json({ message: '', data: result });
    }
  });
});

router.get('/:id', (req, res) => {
  const sql = `SELECT *
               FROM cabañas
               WHERE id = ?`;

  connection.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ message: 'Error al obtener la cabaña', data: [] });
    } else {
      res.json({ message: '', data: result[0] });
    }
  });
}); */

module.exports = router;