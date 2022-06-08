const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '16782794',
    port: 3306,
    database: 'db_reservas'
});
conexion.connect((err)=>{
    if(err) console.log('Falloooooooooooooo '+err)
    else{
        console.log('todo bien');
    }
});

module.exports = conexion;