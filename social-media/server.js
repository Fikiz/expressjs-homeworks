import 'dotenv/config';
import express from 'express';
import { connect } from 'mongoose';
import { MONGO_URI } from './src/const/db.const.js';
import { globalRouter } from './src/const/router.const.js';


const app = express();
app.use(express.json());


app.use('/api', globalRouter)


// connect to database

connect(MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, process.env.HOST, async () =>{
            console.log(
                `The server is up at PORT:${process.env.PORT} and on HOST: ${process.env.HOST}`
            );
        });
    })
    .catch(err => {
        console.log(`Issue while connecting to MongoDB.`,{err});
    });
