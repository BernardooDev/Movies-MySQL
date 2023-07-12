import styled from "styled-components";

export const ListPage = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ListContainer = styled.section`
  width: 50%;
  height: 90vh;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InsideOfContainer = styled.section`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
`;

export const ListOfMovie = styled.div`
  width: 100%;
  height: 90%;
  border: 2px solid;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  align-items: center;
  justify-content: center;

  div {
    width: 49%;
    height: 50%;
    border: 2px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
`;

export const BtnRemove = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
`;

export const BtnFavorite = styled.button`
  position: absolute;
  top: 5%;
  left: 5%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
`