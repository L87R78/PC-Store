const express = require('express');
const cors = require('cors');
const axios = require('axios')
//const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

//require('dotenv').config();
const app = express();
app.use(cors());
//app.use(bodyParser.json());

// mongoose.Promise = global.Promise;
// mongoose.connect(
//     process.env.MONGODB_URI || "https://frontend-intervieww.herokuapp.com",
//     {
//         useMongoClient: true
//     }, () => console.log('Database connected!')
// )

// const registerUser = require('./routes/registerUsers');
// const feedBack = require('./routes/feedback');
 //app.use('/users', registerUser);
// app.use('/feedback', feedBack);

app.get('/api', (req, res) => {
    axios.get('https://swapi.co/api/people/1')
        .then(response => {
           // res.json()
            console.log(response)
        })
        .catch(err => console.log(err))
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));





 // "server": "node index.js",
    // "client": "npm start --prefix client",
    // "dev": "concurrently \"npm run server\" \"npm run client\"",
    // "heroku-postbuild": "npm install --prefix client && npm run build --prefix client"