const express = require('express');
const connectDB = require("./config/db");
const app = express();
// connect to the mongodb
connectDB();
// middleware to parseJSON data
app.use(express.json());

// define a simple route

app.get("/", (req, res) => {
    res.send("Hello World")
});

// start srver
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});

if (!process.env.MONGODB_URI) {
    console.error("Error: MONGODB_URI is not defined in .env file.");
    process.exit(1); // Exit the application if no URI is provided
}


