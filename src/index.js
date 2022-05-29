const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Pizdy dupa?'));
app.listen(port, () => console.log('Serwer działa pod adresem http://localhost:%{port}'));