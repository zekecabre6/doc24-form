const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/formulario', (req, res) => {
  console.log(req.body);
  res.send('Datos recibidos');
  res.status(200);
});

app.get('/api/especialidades', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'data', 'especialidades.json'));
});

app.get('/api/profesionales/:especialidad', (req, res) => {
  fs.readFile(path.join(__dirname, 'public', 'data', 'horarios.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo de horarios');
      return;
    }
    const horarios = JSON.parse(data);
    res.json(horarios[req.params.especialidad]);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
