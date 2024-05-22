const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const app = express();
const PORT = process.env.PORT || 5000;



app.use(bodyParser.json());
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is runnning on http://localhost:${PORT}`);

});



app.use("/api/books", bookRoutes );
