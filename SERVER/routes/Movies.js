import express from "express";
import { db } from "../../SERVER/index.js";

const router = express.Router();

router.get("/", (req, res) => {
  const sqlSelect = "Select * from movies";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const movieNote = req.body.movieNote;
  const favorites = req.body.favorites
  const sqlInsert =
    "INSERT INTO movies (movieName, movieReview, movieNote,favorites) VALUES (?,?,?,?)";
  db.query(
    sqlInsert,
    [movieName, movieReview, movieNote, favorites],
    (err, result) => {
      if (err) console.log(err);
    }
  );
});

router.delete("/:id", (req, res) => {
  const idmovies = req.params.id;
  const sqlDelete = "DELETE FROM movies WHERE idmovies = ?";
  db.query(sqlDelete, idmovies, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

router.put("/:id", (req, res) => {
  const idmovies = req.params.id;
  const { favorites } = req.body;
  const sqlUpdate = "UPDATE movies SET favorites = ? WHERE idmovies = ?";
  db.query(sqlUpdate, [favorites, idmovies], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

export default router;
