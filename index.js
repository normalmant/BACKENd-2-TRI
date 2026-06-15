const express= require("express")
const app=express()
const port= 3000




app.get("/ola", (req, res) => {
    res.json({
        nome: "Renato",
        idade: "16 anos"
    });
});



app.listen(port,()=>{
    console.log("API executando na porta "+port)
})