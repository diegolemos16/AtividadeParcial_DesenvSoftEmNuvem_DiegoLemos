const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Esse é o projeto do aluno Diego Lemos!')
});

app.listen(3000, () => {
  console.log('O servidor da Unifor está funcionando');
});
