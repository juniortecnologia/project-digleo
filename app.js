const mongoose = require('./db');

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

const novoUsuario = new Usuario({
    nome: 'Junior',
    email: 'junior@exemplo.com',
});

novoUsuario.save()
.then(() => console.log('Usuário salvo com sucesso!'))
.catch(err => console.error('Erro ao salvar usuário:', err));