// app.js

const express = require('express');
const app = express();
const port = 3000;

// Route principale
app.get('/', (req, res) => {
  res.send('Bonjour, bienvenue sur mon serveur Express !');
});
// Ajoutez cette route à votre fichier app.js
app.get('/about', (req, res) => {
    res.send('Page à propos');
  });
  app.get('/contact', (req, res) => {
    res.send('Page de contact');
  });
// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
