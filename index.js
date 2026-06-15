const express= require("express")
const app=express()
const port= 3000




app.get("/ola", (req, res) => {
    res.json({
        nome: "Carlos Alberto",
        idade: "72 anos"
    });
});



app.listen(port,()=>{
    console.log("API executando na porta "+port)
})