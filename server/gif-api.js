const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());

// app.get('/', (req, res) => {
//   res.send('')
// });

app.get('/giphy/search', (req, res) => {
  axios.get(`https://api.giphy.com/v1/gifs/search`, {
    params: {
      api_key: process.env.REACT_APP_GIPHY_KEY,
      q: 'dog'
    }
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error.response)
  });
});

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port} `);
});
