const express = require('express');
const connectDB = require('./config/db');
var cors = require ('cors');
const path = require("path");
// routes
const songs = require('./routes/api/songs');
const app = express();

//connect database
connectDB();

//cors
app.use(cors({ origin: true, credentials: true }));

//Init Middleware
app.use(express.json({ extended: false }));
//app.get('/', (req, res) => res.send('Hello world!'));
app.use(express.static(path.join(__dirname,"client","build")))

//use Routes
app.use('/api/songs', songs);
const port = process.env.PORT || 8082;

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));