const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes/api");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()


const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", router);

app.use(express.static(path.join(__dirname, "admin-panel", "build")));

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../", "admin-panel", "build", "index.html")
  );
});

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    // useUnifiedTology: true // Error: option useunifiedtology is not supported
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}\nMongoDB is connected`)
    )
  )
  .catch((error) => console.log(error.message));
