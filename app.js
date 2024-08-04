const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3040;
const AppRouter = require('./routes/AppRoutes');
const cors = require('cors');

//enable cors
app.use(cors());

app.use(express.json()) ;// allows raw data to post
app.use(express.urlencoded({ extended: false })); //enable the form data
//add routes
app.use("/api",AppRouter);

const MONGO_DB_URI = 'mongodb://127.0.0.1:27017/zomatoClone';
mongoose.connect(MONGO_DB_URI).then(() => {
    console.log("DB is successfully connected");
    app.listen(PORT, () => {
        console.log("server running on port ",PORT);
    })
}).catch((error) =>{
    console.log(error);
})