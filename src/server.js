const express = require('express');
const app = express(); 
const data = require('./data.json');

app.use(express.json());


//VERBOS HTTP
//GET: Vai receber dados de um resorce.
//POST: Vai mandar os dados para serem processados por um resorce
//PUT: Vai atualizar os dados de um resorce 
//DELETE: VAI Deleta um resorce

//URI  http://localhost:3000/{clients} endpoint {clients}

app.get('/clients', (req, res)=> {
    res.json(data);
});

app.get('/clients/:id', (req, res) => {
    const {id} = req.params;
    const client = data.find(cli => cli.id = id);
    if(!client) return res.status(204).json();

    res.json(client);
});


app.post('/clients');
app.put('/clients/:id');
app.delete('/clients/:id');


app.listen(3000, function(){
    console.log('Server is Running');
})
