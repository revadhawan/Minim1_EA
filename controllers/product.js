'use strict'

const Product = require('../models/product')


//GET ALL PRODUCTS
function getProducts (req, res) {
    //Devuelve un callback con las dos variables petición y respuesta
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err} `})
        if (!products) return res.status(404).send({message: 'No existen productos'})
       
        //Finalizar petición y comprobar que funciona
        res.send(200, { products })
    })
}

//GET PRODUCT BY ID
function getProduct (req,res) {
    let productId = req.params.productId
    
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err} `})
        if (!product) return res.status(404).send({message: `El producto no existe`})
  
        res.status(200).send({ product })
    })
}

//CREATE PRODUCT
function saveProduct (req, res) {
    console.log('POST /api/product')
    console.log(req.body) //Mostrar todo el cuerpo (body)

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) res.status(500).send({message: `Error al salvar en la BBDD: ${err}`})
    
        res.status(200).send(productStored)
    })
}

//UPDATE PRODUCT
function updateProduct (id) {
    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizarlo: ${err}`})
    
        res.status(200).send(productUpdated)
    })
}

//DELETE PRODUCT
function deleteProduct (id) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) res.status(500).send({message: `Error al eliminarlo: ${err}`})
    
        product.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminarlo: ${err}`})
            
            res.status(200).send({message: `Producto eliminado`})
        })
    })
}

module.exports = {
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}