const express = require('express')
const dotenv = require('dotenv')
const mahasiswaRoute = require('./routes/mahasiswaRoutes')
const app = express()


dotenv.config();
const port = process.env.PORT;

//middleware
app.use(express.json())

app.use("/mahasiswa", mahasiswaRoute);
app.get('/',(req,res)=>{
    res.json({ message: "API Mahasiswa ready to go" });
})

app.listen(port,()=>{
    console.log(`Server berjalan di http://localhost:${port}`);
})