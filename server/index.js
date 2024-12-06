import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();


import { postSignup,postLogin } from './controllers/user.js';

const app = express();
app.use(express.json());
app.use(cors());


//connect to mongodb

const connectdb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)

    if(conn){
        console.log(`MongoDB Connected Successfully `);
    }
};

connectdb();

app.get(`/`,(req ,res)=>{
    res.json({
        message :"Welcome to Market Mantra"
    })
})

app.post("/signup",postSignup )

app.post("/login", postLogin)



const PORT = process.env.PORT || 8000 ;

app.listen(PORT,(()=>{
    console.log(`server is ruuning on port ${PORT}`);

}))