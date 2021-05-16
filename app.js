const express = require('express');
const connectDB = require('./config/db');
var cors = require ('cors')
const app = express();
connectDB();

//cors
app.use(cors({ origin: true, credentials: true }));

//Init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));

//use Routes
// eslint-disable-next-line no-undef
app.use('/api/songs', songs);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));