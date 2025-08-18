//index.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mahasiswaRoute = require("./routes/mahasiswaRoutes");
const app = express();

dotenv.config();
const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(cors());

app.use("/mahasiswa", mahasiswaRoute);

app.get("/", (req, res) => {
  res.json({ message: "API Mahasiswa ready to go" });
});

// 404 Handler (kalau route tidak ditemukan)
app.use((req, res) => {
  res.status(404).json({ status: 404, message: "Not Found", data: null });
});

// Error Handler Global
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(500)
    .json({ status: 500, message: "Internal Server Error", data: null });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
