const express = require('express');
const app = express();
const path = require('path');

const port = 4000;



app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/*', function(req, res) {
  var filePath = 'thru-hike/client/dist/index.html'
  var resolvedPath = path.resolve(filePath);
  console.log()
})


app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});