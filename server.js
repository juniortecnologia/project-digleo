const express = require("express");	//importando o express
const app = express();
const data = require("./data.json");

app.use(express.json());

//verbos HTTP
//GET: receber dados de um resource (cliente, produto, etc)
//POST: enviar dados ou informações para serem processados por um resource (cliente, produto, etc)
//PUT: atualizar dados de um resource 
//DELETE: eliminar dados de um resource

app.get("/clients", function(req, res){
    res.json(data);
}); //endpoint

app.get("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    res.json(client);

}); //endpoint

app.post("/clients", function(req, res){
    const { name, email } = req.body;
    
    //salvar

    res.json({name, email});
}); //endpoint

    
app.put("/clients/:id", function(req, res){

    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    const { name, email } = req.body;

    client.name = name;
    client.email = email;

    res.json(client);

}); 

app.delete("/clients/:id", function(req, res){

    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered);
});  

app.listen(3001, function() {
  console.log('Server is running on port 3000');
});
