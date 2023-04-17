const express = require('express')
const app = express()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const cors = require('cors')

app.use(cors())

const getProducts = async (req, res)=> {
    const products = await prisma.products.findMany()
    console.log('All Products', products)
    if (products){
        res.send(products)
    } else (res.send("erro ao buscar itens"))
}

const getproduct = async (req, res)=> {
    const id = parseInt( req.params.id )
    const products = await prisma.products.findUnique({where:{id}})
    if (products){res.send(products)}

}

const createProducts = async (req, res)=> {
    const data = req.body
    const products = await prisma.products.createMany({data})
    if (products){ 
        res.send("Products created succesfully ✅")
    }
}

const createProduct = async (req, res)=> {
    const data = req.body
    const products = await prisma.products.create({data})
    if (products){ 
        res.send("Product created succesfully ✅")
    }
}

const deleteProduct = async (req, res)=> {
    const id = parseInt(req.params.id)
    const products = await prisma.products.delete({where:{id}})
    if (products){
    res.send("Product deleted succesfully ✅")
    }
}

const upProduct = async (req, res)=> {
    const id = parseInt(req.params.id)
    const data = req.body
    const result = await prisma.products.update({where:{id}, data})
    console.log(data, result)
    try { 
        if(result) {res.send(`the product whoose id is: ${id}, was succesfully updated✅}`) }
        
    } catch (error) {
        res.send("Ihhh, algo de errado não está certo")
    }
}

module.exports = {upProduct,getProducts, getproduct, deleteProduct, createProduct, createProducts}