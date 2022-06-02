const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('boa tarde')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`fazendo traquinagens na porta ${PORT}, ${process.env.TESTE}`)
})