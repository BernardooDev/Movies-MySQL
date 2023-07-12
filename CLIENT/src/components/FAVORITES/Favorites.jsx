import {
  FavoritePage,
  FavoriteContainer,
  TitleFavorite,
  ListOfFavorite,
  FavoriteItem,
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
                <h1>{d.movieName}</h1>
                <p>{d.movieReview}</p>
                <p>Note: {d.movieNote}%</p>
                <AiFillHeart style={{ color: "red" }}/>
              </FavoriteItem>
            ))}
        </ListOfFavorite>
      </FavoriteContainer>
    </FavoritePage>
  );
};

export default Favorites;
