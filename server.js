import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/Database.js";
import router from "./routes/postRoutes.js";


dotenv.config();

const app = express();

app.use(express.json());



//route
app.use('/', router)
// Database

ConnectDB();

// Port
const port = process.env.PORT;

//Server Running
app.listen(port, () =>{
    console.log(`Server Running at http://localhost:${port}`)
})