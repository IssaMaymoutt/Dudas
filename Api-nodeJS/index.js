require('./config/conexion');
const express = require('express');
const port = (process.env.port || 3000);

const app = express();

// datos
app.use(express.json());
// configurar puerto
app.set('port', port);

// rutas
app.use('/api',require('./reservas'));
app.use('/partidos',require('./partidos'));

//
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('errorrrrrrrr');
    }
    else {
        console.log('furula '+port);
    }
})