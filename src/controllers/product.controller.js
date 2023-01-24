const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getProducts = async (req, res)=> {
    const produtos = await prisma.produtos.findMany()
    console.log('All Products', produtos)
    if (produtos){
        res.send(produtos)
    }
}

const getproduct = async (req, res)=> {
    const id = parseInt( req.params.id )
    const produtos = await prisma.produtos.findUnique({where:{id}})
    if (produtos){res.send(produtos)}

}

const createProducts = async (req, res)=> {
    const data = req.body
    const produtos = await prisma.produtos.createMany({data})
    if (produtos){ 
        res.send("Products created succesfully ✅")
    }
}

const createProduct = async (req, res)=> {
    const data = req.body
    const produtos = await prisma.produtos.create({data})
    if (produtos){ 
        res.send("Product created succesfully ✅")
    }
}

const deleteProduct = async (req, res)=> {
    const id = parseInt(req.params.id)
    const produtos = await prisma.produtos.delete({where:{id}})
    if (produtos){
    res.send("Product deleted succesfully ✅")
    }
}

const upProduct = async (req, res)=> {
    const id = parseInt(req.params.id)
    const data = req.body
    const result = await prisma.produtos.update({where:{id}, data})
    console.log(data, result)
    try { 
        if(result) {res.send(`the product whoose id is: ${id}, was succesfully updated✅}`) }
        
    } catch (error) {
        res.send("Ihhh, algo de errado não está certo")
    }
}

module.exports = {upProduct,getProducts, getproduct, deleteProduct, createProduct, createProducts}