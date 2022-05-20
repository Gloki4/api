const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Witaj, Jan Paweł II gwałcił małe dzieci!'));
app.listen(4000, () => console.log('Serwer nasłuchuje na porcie numer 4000!'));