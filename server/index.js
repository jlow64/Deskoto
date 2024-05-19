const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: ["http://localhost:3000"] }));

const port = process.env.PORT || 4000;

app.use("/api", require("./routes/api"));

app.listen(port, () => {
  console.log(`Listening in from localhost:${port}`);
});
