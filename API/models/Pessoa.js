'use strict'
module.exports = class Pessoa{
    
    constructor(nome){
        this.nome = nome;
    }

    static falar(){
        console.log('Falando');
    }
}


