const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getUsers = async (req, res) => {
    const usuarios = await prisma.usuarios.findMany({ include:{enderecos:true}})
    if (usuarios){
    res.send(usuarios)
    }
}

const getUser = async (req, res)=> {
    const id = parseInt(req.params.id)
    const usuarios = await prisma.usuarios.findUnique({where:{id}})
    if (usuarios){
    res.send(usuarios)
    }
}

const createUser = async (req, res) => {
        const data = {  ...req.body,   enderecos: {create: [req.body.enderecos]}}
        const usuarios = await prisma.usuarios.create({data})
        if(usuarios){
            res.send('Usuário criado com sucesso ✅')
        }
    }

const deleteUser = async (req, res)=> {
        const id = parseInt(req.params.id)
        const usuarios = await prisma.usuarios.delete({where:{id}})
        if (usuarios){
        res.send("Usuário deletado com sucesso ✅")
        }
    }

const upUser = async (req, res)=> {
        const id = parseInt(req.params.id)
        let data = req.body
        data = {  ...req.body,   enderecos: {create: [req.body.enderecos]}}
        const usuarios = await prisma.usuarios.update({where:{id},data})
        if (usuarios){
        res.send("Usuário atualizado com sucesso ✅")
        }
    }
const upUsers = async (req, res)=> {
        const id = parseInt(req.params.id)
        const data = req.body
        const usuarios = await prisma.usuarios.updateMany({where:{id},data})
        console.log(data, usuarios)
    try { 
        if(result) {res.send(`the Users whoose id are: ${id}, have been successfully updated✅}`) }
        
    } catch (error) {
        res.send("Ihhh, algo de errado não está certo")
    }
    }


module.exports = {upUsers ,createUser, getUser, getUsers, deleteUser, upUser, deleteUser}