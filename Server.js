const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/TodoRoute");

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb+srv://anushka:Nanushanu1@cluster0.xpmu9i9.mongodb.net/todoapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));


// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));
