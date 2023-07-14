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
  TitleCrud,
  // Emoji,
} from "./Style";
import { NavLink } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { PiPopcornThin } from "react-icons/pi";
import { useQuery } from "react-query";

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
        favorites: favorite,
      }).then(() => {
        alert("Send to the database");
      });
    setMovie("");
    setReview("");
    setNote(0);
    refetch()
  }

  const getData = async () => {
    const response = await Axios.get("http://localhost:3010/movies");
    return response.data;
  };

  const { data, refetch } = useQuery("movies", getData);

  const Emoji = ({ note }) => {
    let emoji = "";

    if (note < 20) {
      emoji = "😢";
    } else if (note < 40) {
      emoji = "😐";
    } else if (note < 60) {
      emoji = "🙂";
    } else if (note < 80) {
      emoji = "😊";
    } else {
      emoji = "😄";
    }

    return <span>{emoji}</span>;
  };

  return (
    <CrudPage>
      <CrudContainer>
        <TitleCrud>
          <h1>Watched - Movies</h1>
        </TitleCrud>
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
            id="movie-note"
            value={note}
            onChange={({ target }) => setNote(target.value)}
          />
          <Emoji note={note}></Emoji>
        </DivRange>
        <BtnCrud type="submit" onClick={HandlePost}>
          <BiMoviePlay />
        </BtnCrud>
      </CrudContainer>
      <ListContainer>
        <PiPopcornThin className="popcorn" />
        <h1>List of Movies</h1>
        <DivWatched>
          <NavLink to="/list">
            <FaPlay />
            See
          </NavLink>
        </DivWatched>
        <h1>Movies : {data?.length}</h1>
      </ListContainer>
    </CrudPage>
  );
}

export default Crud;
