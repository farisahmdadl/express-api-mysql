require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const usersRoutes = require('./routes/users.js');
const app = express();
const middlewareLogRequest = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');

app.use(middlewareLogRequest);
app.use(express.json());
app.use(express.static('public'))

app.use('/users', usersRoutes)
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Successfully uploaded!'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () =>{
    console.log(`Running on port ${PORT}`);
});