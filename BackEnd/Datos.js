const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//EXTRAEMOS TODOS LOS DATOS DE LOS CLIENTES DE LA BASE DE DATOS
app.get('/api/clientes', (req, res) => {
const conection = require('./Connection')

conection.query('SELECT * FROM clientes', function(err,rows){
    if(!err){
        res.json("Los clientes son ", rows);
    } 
});

conection.end();
});

fetch('/api/clientes')
 .then(response => response.text())
 .then(data => {
    const clientes = JSON.parse(data);
    console.log(clientes);
  });


//EXTRAEMOS TODOS LOS DATOS DE LOS PRODUCTOS DE LA BASE DE DATOS
app.get('/api/productos', (req, res) => {
const conection2 = require('./Connection')

conection2.query('SELECT * FROM productos', function(err,rows){
    if(!err){
        res.json("Los productos son ", rows);
    }
})

conection2.end();
});

fetch('/api/productos')
 .then(response => response.text())
 .then(data => {
    const productos = JSON.parse(data);
    console.log(productos);
  });



//EXTRAEMOS TODOS LOS DATOS DE LAS VENTAS DE LA BASE DE DATOS
app.get('/api/ventas', (req, res) => {
const conection3 = require('./Connection')

conection3.query('SELECT * FROM ventas Where clientes_id = ?', function(err,rows){
    if(!err){
        console.log("Las ventas son ", rows);
    }
})

conection3.end();
});

fetch('/api/ventas')
 .then(response => response.text())
 .then(data => {
    const ventas = JSON.parse(data);
    console.log(ventas);
  });

app.listen(port, () => {
    console.log(`Servidor web corriendo en el puerto ${port}`);
  });