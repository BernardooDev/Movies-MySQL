import styled from "styled-components";

export const FavoritePage = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #16122A
`;

export const FavoriteContainer = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleFavorite = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  h1 {
    color: whitesmoke;
    font-size: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: whitesmoke;
  }

`;

export const FavoriteItem = styled.div`
    width: 45%;
    height: 50%;
    border: 1px solid whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    svg {
        position: absolute;
        top: 10%;
    }
`

export const ListOfFavorite = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  align-items: center;
  justify-content: center;
  gap: 2%;
`;
