import express from "express";
import mysql from "mysql";
import moviesRouter from "./routes/Movies.js"
import cors from "cors"
import dotenv from "dotenv"

const app = express();
const port = 3010;
dotenv.config()

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "crud-mysql",
});

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use("/movies", moviesRouter)

// app.post("/movies", (req,res) => {

//     const movieName = req.body.movieName
//     const movieReview = req.body.movieReview

//     const sqlInsert = 'INSERT INTO movies (movieName, movieReview) VALUES (?,?)'
//     db.query(sqlInsert, [movieName, movieReview], (err, result) => {
//         console.log(err)
//     })
// })

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
