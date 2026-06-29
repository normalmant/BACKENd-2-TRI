const express= require("express")
const app=express()
const port= 3000

app.use(express.json())
const fs=require('fs')


app.post("/clientes", (req, res) => {
  const cliente= req.body

    try{
        //abrir o arquivo
        const bd=JSON.parse(fs.readFileSync("bd.json","utf8"))
        //adicionar
        bd.push(cliente)
        //salvar arquivo
        fs.writeFileSync("bd.json",JSON.stringify(bd),"utf8")
        //resposta
        res.status(201).json({resposta: "Cliente cadastrado!"})

    } catch(erro){
        res.status(500).json({erro:erro.message})
    }
});



app.get("/clientes",(req,res)=>{
    try{
        const bd=JSON.parse(fs.readFileSync("bd.json","utf8"))

        res.status(200).json({ respota:bd})


        
    }catch(erro){
        res.status(500).json({erro:erro.message})
    }
});






app.get("/clientes/:cpf",(req,res)=>{

    const cpf= req.params.cpf


    try{
        const bd=JSON.parse(fs.readFileSync("bd.json","utf8"))

        const cliente= bd.find((cliente)=> cliente.cpf==cpf)
        if(!cliente){
            return res.status(404).json({erro: "Cliente não existe no Banco de Dados"})
        }
        res.status(200).json({ respota:cliente})
    }catch(erro){
        res.status(500).json({erro:erro.message})
    }
});

// TESTE 
app.get("/clientes/nome/:nome",(req,res)=>{

    const nome= req.params.nome

    try{
        const bd=JSON.parse(fs.readFileSync("bd.json","utf8"))

        const cliente= bd.find((cliente)=> cliente.nome==nome)
        if(!cliente){
            return res.status(404).json({erro: "Cliente não existe no Banco de Dados"})
        }
        res.status(200).json({ respota:cliente})
    }catch(erro){
        res.status(500).json({erro:erro.message})
    }
});




app.delete("/clientes/:cpf",(req,res)=>{

    const cpf= req.params.cpf


    try{
        const bd=JSON.parse(fs.readFileSync("bd.json","utf8"))

        const indiceCliente=bd.findIndex((cliente)=>cliente.cpf==cpf)
        if(indiceCliente==-1){
            return res.status(404).json({erro: "Cliente não existe no Banco de Dados"})
        }

        bd.splice(indiceCliente,1)

        fs.writeFileSync("bd.json",JSON.stringify(bd),"utf8")
        res.status(200).json({resposta:"Cliente apagado"})
    }catch(erro){
        res.status(500).json({erro:erro.message})
    }
});










app.get("/perfil", (req, res) => {
    res.json({
        nome: "Carlos Alberto",
        idade: "72 anos"
    });
});






app.get("/ola", (req, res) => {
    res.json({
        mensagem: "Olá Mundo"
    });
});



app.listen(port,()=>{
    console.log("API executando na porta "+port)
})