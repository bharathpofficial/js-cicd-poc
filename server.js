const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello CI/CD!'));

// Export app for testing (no auto-listen)
module.exports = app;


