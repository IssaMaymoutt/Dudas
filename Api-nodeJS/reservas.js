const rutas = require('express').Router();
const { Router } = require('express');
const conexion = require('./config/conexion');

//**************PRUEBAS**************//
// rutas.get('/', function(req, res){
//     res.send('ESTAS EN LAS TURAS PEERRO');
// });


//**************RUTAS**************//

//***********RECUPERAR RESERVAS*****//
rutas.get('/', (req, res)=> {
    let sql = 'select * from tb_reservas'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    })
})

//***********RECUPERAR RESERVAS POR ID*****//
rutas.get('/:id', (req, res)=> {
    const {id} = req.params
    let sql = 'select * from tb_reservas where id_reservas = ?'
    conexion.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    })
})
//***********ALTA RESERVA**************//

rutas.post('/',(req, res)=>{
    const {nombre, tlf, num_personas} = req.body
    let sql = `insert into tb_reservas(nombre, tlf, num_personas) values('${nombre}','${tlf}','${num_personas}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'Reserva añadida'});
        }
    })

})
//**************ELIMINAR RESERVA*****************//

rutas.delete('/:id', (req, res)=>{
    const {id} = req.params
    let sql = `delete from tb_reservas where id_reservas = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'Reserva eliminada'});
        }
    })
})
//**************MODIFICAR RESERVA*****************//

rutas.put('/:id', (req, res)=> {
    const {id} = req.params
    const {nombre, tlf, num_personas} = req.body
    let sql = `update tb_reservas set 
                nombre = '${nombre}',
                tlf = '${tlf}',
                num_personas = '${num_personas}'
                where id_reservas = '${id}'`

    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'Reserva modificada'});
        }
    })
})








module.exports = rutas;