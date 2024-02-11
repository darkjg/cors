const  axios  = require("axios");
const expres = require("express");
const cors= require("cors");
const app = expres();
const url="https://rickandmortyapi.com/api/character/?name=";
app.use(cors());

app.get("/characters/:charactName", async (req, res) => {
    const charactName = req.params.charactName;    
   
    const urlEnd= `${url}${charactName}`   
    
    try { 
        const response= await axios.get(urlEnd);
        const{results:{0:{name, status,species,gender,image,origin}}}=response.data        
        res.json({results:{0:{name, status,species,gender,image,origin}}})
    } catch { 
        res.status(404).json({error:"Personaje no encontrado"})
    }
})

app.listen(4000, () => {
    console.log("Servidor abierto escuchando en  http://127.0.0.1:4000")
})