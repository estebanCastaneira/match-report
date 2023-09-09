require("dotenv").config();
const express = require("express");
const router = require("./routes");
const PORT = process.env.APP_PORT;

const app = express();

app.use(express.json());
routes(app);
app.listen(PORT, () =>
  console.log(`server running on port ${PORT} http://localhost:${PORT}`)
);
