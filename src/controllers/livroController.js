const db = require('../database/models')
const Livro = db.Livro

const livroController = {
  list: (req, res) => {
    Livro.findAll()
    .then(livros => {
      res.status(200).json(livros)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  },
   getById: (req, res) => {
   const {id} = req.params
   Livro.findByPk(id)
   .then(livro => {
    res.status(200).json(livro)
   })
   .catch(err => {
    res.status(500).json(err)
   })
  },
  create: (req, res) => {
    const {titulo, quantidadedePagina, autor, estoque} = req.body //pegando por parametro dee id posso pegar pro body

    Livro.create({
      titulo,
      quantidadedePagina,
      autor,
      estoque
    })

    Livro.findall()
    .then(livros => {
      res.status(200).json(livros)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  },
  update: (req, res) =>{
    const {id} = req.params
    const {titulo, quantidadedePagina, autor, estoque} = req.body

    Livro.update({
      titulo,
      quantidadedePagina,
      autor,
      estoque
    },{
      where: {
        id
      }
    })
    .then(livro =>{
      res.status(200).json(livro)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  },
  delete: (req,res) => {
    const {id} = req.params;

    Livro.destroy({
      where: {
        id
      }
    })
    .then(livro =>{
      res.status(200).json(livro)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = livroController
