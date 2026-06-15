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
