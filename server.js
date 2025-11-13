let funghi = {
    porcino: 10,
    chiodino: 5,
    caesarea: 10,
    phalloide: -10,
    muscaria: -4,
    spugnola: 6,
}


console.log("il server si sta avviando...");

const express = require("express");
const app = express();


app.listen(3000, () => console.log("in ascolto su porta 3000"));

app.get("/",function(req,res){
    res.send("Benvenuto micologo");
})

app.get("/elencofunghi", (req,res)=>{
    res.send(funghi);
})