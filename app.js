// app.js

const express = require('express');
const app = express();
const port = 3000;

// Route principale
app.get('/', (req, res) => {
  res.send('Bonjour, bienvenue sur mon serveur Express !');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
