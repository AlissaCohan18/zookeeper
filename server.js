const express = require('express');

//.env is a built-in secret/hidden folder on the root (for example to store the port number)
const PORT = process.env.PORT || 3001;
const app = express();
//not including a file name defaults to the 'index' file in these directories
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//middleware instructs the server to make these (style) files static resources
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});