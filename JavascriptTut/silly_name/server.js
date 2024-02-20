const express = require('express');
const names = require('silly-names-hun');
const app = express();
const port = 3000;

// Allow CORS - For development purposes only
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/generate-name', (req, res) => {
 
  const { onlyAppropriate } = req.query;
  let name;
  if (onlyAppropriate === 'true') {
    name = names.getRandomName(true);
  } else if (onlyAppropriate === 'false') {
    name = names.getRandomName(false);
  } else {
    name = names.getRandomName();
  }
  res.json({ name });
});

app.listen(port, () => {
  console.log(`Silly names server listening at http://localhost:${port}`);
});
