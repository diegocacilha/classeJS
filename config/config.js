const express = require('express');
const app = express();

// const pessoa = require('../API/models/Pessoa');
const Pessoa = require('../API/models/Pessoa');
const Filho = require('../API/models/Filho');

app.listen(3000, () => console.log('Server rodando na porta 3000'));

module.exports = function(){
    // consign({cwd: 'API'})
    //     .include('models')
    //     .into(app);
    
    
    var diego = new Pessoa('Diego');
    let filho;
    try{
        filho = new Filho('Armando', diego);
    }catch(e){
        console.log(e);
    }
    console.log(filho);
    filho.metPublico();
    Filho.falar();
    // console.log(diego);
    return app;
}