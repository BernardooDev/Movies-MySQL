import { useState } from "react";
import Axios from "axios";
import {
  CrudPage,
  CrudContainer,
  DivRange,
  DivReview,
  DivName,
  BtnCrud,
  ListContainer,
  DivWatched,
} from "./Style";
import { NavLink } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import {FaPlay} from "react-icons/fa"

function Crud() {
  const [movie, setMovie] = useState("");
  const [review, setReview] = useState("");
  const [note, setNote] = useState(0);
  const [favorite] = useState(0);

  const HandlePost = () => {
    if (movie && review && note != "")
      Axios.post("http://localhost:3010/movies", {
        movieName: movie,
        movieReview: review,
        movieNote: note,
        favorites: favorite
      }).then(() => {
        alert("Send to the database");
      });
    setMovie("");
    setReview("");
    setNote(0);
  };

  return (
    <CrudPage>
      <CrudContainer>
        <h1>Watched - Movies</h1>
        <DivName>
          <label htmlFor="movie">Movie name</label>
          <input
            type="text"
            name="movie"
            id="movie"
            value={movie}
            onChange={({ target }) => setMovie(target.value)}
          />
        </DivName>
        <DivReview>
          <label htmlFor="movie-review">Movie review</label>
          <textarea
            name="movie-review"
            rows="4"
            cols="50"
            id="movie-review"
            value={review}
            onChange={({ target }) => setReview(target.value)}
          />
        </DivReview>
        <DivRange>
          <label htmlFor="movie-note">Note:</label>
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={note}
            onChange={({ target }) => setNote(target.value)}
          />
          <p>{note}%</p>
        </DivRange>
        <BtnCrud type="submit" onClick={HandlePost}>
          <BiMoviePlay />
        </BtnCrud>
      </CrudContainer>
      <ListContainer>
        <h1>Lista de filmes</h1>
        <DivWatched>
        <NavLink to="/list"><FaPlay/>See</NavLink>
        </DivWatched>
      </ListContainer>
    </CrudPage>
  );
}

export default Crud;
