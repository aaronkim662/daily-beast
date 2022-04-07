const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());

app.get('/giphy/:search', (req, res) => {

  axios.get(`https://api.giphy.com/v1/gifs/search`, {
    params: {
      api_key: process.env.REACT_APP_GIPHY_KEY,
      q: req.params.search,
      limit: parseInt(req.query.limit),
      offset: parseInt(req.query.offset)
    }
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
  });
});

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port} `);
});
