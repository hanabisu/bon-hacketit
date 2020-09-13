const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const api = require("./routes/api");
const port = 3000;
const ip = "localhost";
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

// All your handlers here...
app.use("/api", api);
app.listen(port, ip, () =>
  console.log(`App listening at http://localhost:${port}`)
);
