const express = require('express');
const cors = require('cors');

const cabañasRoutes = require('./routes/cabañas_routes');
//const reservasRoutes = require('./routes/reservas_routes');

const app = express();

//app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

//app.use(express.static('public'));

//app.use(express.json());

app.use('/cabañas', cabañasRoutes);
//app.use('/reservas', reservasRoutes);

app.listen(8000, () => {
    console.log('Servidor funcionando');
});