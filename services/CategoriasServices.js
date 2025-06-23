// todas as regras de negócio
// criação de uma categoria, listagem das categorias, edição de uma categoria, exclusão de uma categoria

const CategoriasModel = require('../models/CategoriasModel') // importando o modelo de categorias
const express = require('express')
const app = express()

//middleware de recebimento de json
app.use(express.json())// permite que o express compreenda o body da requisição no formato json

//criação da função do primeiro serviço

async function getCategorias() {
    CategoriasModel.findAll() //método assíncrono para buscar todas as categorias
        .then(categorias =>{
            return({
                status:200,
                dados: categorias
            })
        })
        .catch(erro =>{
           return({
                status:500,
                message: erro
            })
        })
}

async function postCategoria(categoria){
    CategoriasModel.create(categoria)
    .then(categoriaCriada => {
        return({
            status:200,
            dadosCriados: categoriaCriada
        })
    })
    .catch(erro => {
        return({
            status:500,
            message: erro
        })
    })
}


module.exports = {
    getCategorias
}