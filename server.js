const express = require('express');
const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API no ar!')
});

//Rotas
app.use('/games', require('./routes/gamesRoute'));

app.listen(PORT, () => {
    console.log(`Servidor no ar pela porta ${PORT}`);
  });
  
module.exports = app;