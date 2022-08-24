// Requisição da biblioteca
const express = require('express');
const app = express();

//Informa como será feita a visualização e onde estarão os arquivos
app.set('view engine', 'ejs')
app.use(express.static('public'))

//designa a porta
app.listen(8000)