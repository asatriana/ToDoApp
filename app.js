const express = require('express');
const todoController = require('./controller/todoController')

const app = express();

app.set('view engine','ejs');
app.use(express.static('./public'));

//controller
todoController(app);

app.listen(3000);
console.log('You are listening on port 3000');

