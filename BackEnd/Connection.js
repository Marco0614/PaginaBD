const mysql = require('mysql')

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'supermercado'
})

conection.connect(function(err){
    if(err){
        throw err;
        conection.end();
    } else{
        console.log('Conectado')
        conection.end();
    };

})

conection.end();

