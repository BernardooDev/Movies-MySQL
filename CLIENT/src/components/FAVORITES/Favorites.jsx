import {
  FavoritePage,
  FavoriteContainer,
  TitleFavorite,
  ListOfFavorite,
  FavoriteItem,
  TitleOfMovie,
  ReviewOfMovie,
  BtnFavorite,
} from "./Style";
import { NavLink } from "react-router-dom";
import { AiFillBackward,AiFillHeart } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { useQuery } from "react-query";
import axios from "axios";

const Favorites = () => {
  const getData = async () => {
    const response = await axios.get("http://localhost:3010/movies");
    return response.data;
  };

  const { data, isLoading, refetch } = useQuery("movies", getData);

  const handleFavorite = async (id) => {
    const movie = data.find((d) => d.idmovies === id);
    if (movie.favorites === 0) {
      movie.favorites = 1;
    } else if (movie.favorites === 1) {
      movie.favorites = 0;
    }

    await axios.put(`http://localhost:3010/movies/${id}`, {
      favorites: movie.favorites,
    });

    refetch();
  };

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
    <FavoritePage>
      <FavoriteContainer>
        <TitleFavorite>
          <NavLink to="/list">
            <AiFillBackward></AiFillBackward>
          </NavLink>
          <h1>Favorites</h1>
          <NavLink to="/">
            <BiMoviePlay />
          </NavLink>
        </TitleFavorite>
        <ListOfFavorite>
          {data
            ?.filter((d) => d.favorites === 1)
            .map((d) => (
              <FavoriteItem key={d.idmovies}>
              <TitleOfMovie> {d.movieName}</TitleOfMovie>
              <Emoji note={d.movieNote}></Emoji>
              <ReviewOfMovie> {d.movieReview}</ReviewOfMovie>
              <BtnFavorite
                value={d.favorites}
                onClick={() => handleFavorite(d.idmovies)}
              >
                {d.favorites == 1 ? (
                  <AiFillHeart style={{ color: "whitesmoke" }} />
                ) : (
                  <AiOutlineHeart />
                )}
              </BtnFavorite>
              </FavoriteItem>
            ))}
        </ListOfFavorite>
      </FavoriteContainer>
    </FavoritePage>
  );
};

export default Favorites;
