const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getUsers = async (req, res) => {
    const user = await prisma.user.findMany({ include:{address:true}})
    if (user){
    res.send(user)
    }
}

const getUser = async (req, res)=> {
    const id = parseInt(req.params.id)
    const user = await prisma.user.findUnique({where:{id}})
    if (user){
    res.send(user)
    }
}

const createUser = async (req, res) => {
        const data = {  ...req.body,   address: {create: [req.body.address]}}
        const user = await prisma.user.create({data})
        if(user){
            res.send('Usuário criado com sucesso ✅')
        } 
      
    }

const deleteUser = async (req, res)=> {
        const id = parseInt(req.params.id)
        const user = await prisma.user.delete({where:{id}})
        if (user){
        res.send("Usuário deletado com sucesso ✅")
        }
    }

const upUser = async (req, res)=> {
        const id = parseInt(req.params.id)
        let data = req.body
        data = {  ...req.body,   address: {create: [req.body.address]}}
        const user = await prisma.user.update({where:{id},data})
        if (user){
        res.send(`the User whoose id is: ${id}, have been successfully updated✅}`)
        }
    }
const upUsers = async (req, res)=> {
        const id = parseInt(req.params.id)
        const data = req.body
        const user = await prisma.user.updateMany({where:{id},data})
        console.log(data, user)
    try { 
        if(result) {res.send(`the Users whoose id are: ${id}, have been successfully updated✅`) }
        
    } catch (error) {
        res.send("Ihhh, algo de errado não está certo")
    }
    }


module.exports = {upUsers ,createUser, getUser, getUsers, deleteUser, upUser, deleteUser}