import styled from "styled-components";

export const FavoritePage = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FavoriteContainer = styled.section`
  width: 50%;
  height: 90%;
  border: 2px solid;
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

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

`;

export const FavoriteItem = styled.div`
    width: 49%;
    height: 50%;
    border: 2px solid red;
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
  border: 2px solid;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  align-items: center;
  justify-content: center;
`;
