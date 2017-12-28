// server.js
const express = require('express');
const path = require('path');
const app = express();
const dataServer = require('./server/data-server')

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/summaries', dataServer.getSummaries);
app.get('/details/:id', dataServer.getDetails);
app.post('/details/:id', dataServer.createDetails);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080, () => console.log("listening on 8080"));
