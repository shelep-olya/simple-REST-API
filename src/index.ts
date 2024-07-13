import { MongoClient } from "mongodb";

const express = require("express");
const bodyParser = require("body-parser");

async function start() {
    try{
        const app = express();
        const mongo = await MongoClient.connect("mongodb+srv://shelepolya:7jyPw9ENuhawR2MH@customerapi.hygc5pi.mongodb.net/?retryWrites=true&w=majority&appName=customerAPI");
        await mongo.connect();
        app.db = mongo.db();
        app.use(bodyParser.json({
            limit: '500kb'
        }));


        //routes

        app.use('/customers', require("./routes/customersRoutes"));

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        })

    }catch(err){
        console.log(err);
    }
}

start();