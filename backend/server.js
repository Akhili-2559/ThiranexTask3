const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const authRoutes =
require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

console.log("MongoDB Connected");

})

.catch((err)=>{

console.log(err);

});

app.use("/api/auth", authRoutes);

app.get("/",(req,res)=>{

res.send("Backend Running");

});

app.listen(9090,()=>{

console.log(
"Server running on 9090"
);

});