const rutas = require('express').Router();
const { Router } = require('express');
const conexion = require('./config/conexion');

//***********RECUPERAR TODOS LOS PARTIDOS*****//
rutas.get('/', (req, res)=> {
    let sql = 'select * from tb_partidos'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    })
})

//***********RECUPERAR PARTIDO POR ID*****//
rutas.get('/:id', (req, res)=> {
    const {id} = req.params
    let sql = 'select * from tb_partidos where id_partido = ?'
    conexion.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    })
})






module.exports = rutas;