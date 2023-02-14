let express = require("express");
let app = express();
let cors = require("cors");

app.use(cors());
app.get("/", (req, res, next) => {
  res.json(["Ricardo", "Giullia"]);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
