import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from './routes/auth.js'
import HotelRoute from './routes/hotels.js'


dotenv.config()
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// middleware 

app.use(express.json())
 
app.use('/api/auth', AuthRoute)
app.use('/api/user', AuthRoute)
app.use('/api/hotel', HotelRoute)
app.use('/api/rooms', AuthRoute)

app.use((err, req, rez, next) =>{
  const errStatus = err.status || 500
  const errMessage = err.message || 'something went wrong'
  return res.status(errStatus).json(errMessage)
  next()
})



app.listen(port, () => {
    connectDB()
    
  console.log(`Example app listening on port ${port}`);
});

const connectDB = async () => { 
  try {
    await mongoose.connect(process.env.DB_URI);  
    console.log('database connected');
  } catch (error) {
    throw error
  }
};
