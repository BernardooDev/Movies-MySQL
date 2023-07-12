import axios from "axios";
import {
  ListPage,
  ListContainer,
  InsideOfContainer,
  ListOfMovie,
  BtnRemove,
  BtnFavorite,
} from "./Style";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import {
  AiFillBackward,
  AiFillHeart,
  AiOutlineClose,
  AiOutlineHeart,
} from "react-icons/ai";
import { useState } from "react";
// import { useContext } from "react";
// import { FavoriteContext } from "../../App";

function List() {
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

  const getData = async () => {
    const response = await axios.get("http://localhost:3010/movies");
    return response.data;
  };

  const { data, isLoading, refetch } = useQuery("movies", getData);

  const deleteMovie = async (id) => {
    const response = await axios.delete(`http://localhost:3010/movies/${id}`);
    refetch();
  };

  return (
    <ListPage>
      <ListContainer>
        <InsideOfContainer>
          <NavLink to="/">
            <AiFillBackward></AiFillBackward>
          </NavLink>
          <h1>Lista de Filmes</h1>
          <NavLink to="/favorites">
            <AiFillHeart />
          </NavLink>
        </InsideOfContainer>
        <ListOfMovie>
          {data?.map((d) => (
            <div key={d.idmovies}>
              <h1> {d.movieName}</h1>
              <p> {d.movieReview}</p>
              <p>Note: {d.movieNote}%</p>
              <BtnRemove onClick={() => deleteMovie(d.idmovies)}>
                <AiOutlineClose />
              </BtnRemove>
              <BtnFavorite
                value={d.favorites}
                onClick={() => handleFavorite(d.idmovies)}
              >
                {d.favorites == 1 ? (
                  <AiFillHeart style={{ color: "red" }} />
                ) : (
                  <AiOutlineHeart />
                )}
              </BtnFavorite>
            </div>
          ))}
        </ListOfMovie>
      </ListContainer>
    </ListPage>
  );
}

export default List;
