const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`tamo na ${process.env.TESTE}`)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`fazendo traquinagens na porta ${PORT}`)
})