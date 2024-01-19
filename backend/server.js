const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
const database  = require('./private/database.js')
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');

app.use(cookieParser());

const users = require('./routes/users.js')
const auth = require('./routes/auth.js')
const todo = require('./routes/todos.js')

database();
// const todoSchema = mongoose.Schema({
//     description:String,
// })
// const Todos = mongoose.model('Todos', todoSchema);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(cors());



// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../frontend/index.html'));
// })   
app.use('/users', users);
app.use('/auth', auth);
app.use('/todo', todo);



app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});







