const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//CORS -  ToDo conf for dev and for prod
const cors = require("cors");
require("dotenv").config();

const dbHelper = require("./dbHelper.js");

const recipesRoutes = require("./routes/recipes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join("client")));

app.use("/backend/recipes/", recipesRoutes);

app.use((req, res) => {
 res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

dbHelper.connectToServer(function () {
 app.listen(process.env.PORT);
});
