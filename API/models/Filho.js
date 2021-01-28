'use strict'
var Pessoa = require('./Pessoa');
var UserException = require('../exceptions/UserException');

/**
 * @description Objeto de teste
 */
class Filho extends Pessoa{
    constructor(nome, pai){
        if(!(pai instanceof Pessoa))
            throw new UserException('Filiação não é uma pessoa');
        else{
            super(nome)
            this.pai = pai;
        }
    }
    get falar(){
        return 'Olá mundo! Estou falando'
    }
    get endereco(){
        return this.rua;
    }
    set endereco(rua){
        this.rua = rua;
    }
    //método privado
    #teste(){
        return 'Mais um olá mundo!';
    }
    //método público
    /**
     * @returns void
     */
    metPublico(){
        console.log('Método público');
    }
    static teste2(){
        console.log('Baguallll');
    }
}
module.exports = Filho;