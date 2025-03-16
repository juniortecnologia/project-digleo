const mongoose = require('mongoose');

const uri = 'mongosh "mongodb+srv://cluster0.y61px.mongodb.net/" --apiVersion 1 --username junioralmeidatecnologia --password KOZG8hNujjIAiOzO;'


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conexão ao MongoDB foi bem-sucedida!'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;