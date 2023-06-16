require("dotenv").config();
const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send(`Client Secret: ${process.env.CLIENT_SECRET}, API Secret: ${process.env.API_SECRET}`);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});