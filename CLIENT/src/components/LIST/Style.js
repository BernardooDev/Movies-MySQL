import styled from "styled-components";

export const ListPage = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #16122A
`;

export const ListContainer = styled.section`
  width: 80%;
  height: 90%;
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

  h1 {
    font-size: 2.0rem;
    color: whitesmoke;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: whitesmoke;
  }
`;

export const ListOfMovie = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  align-items: center;
  justify-content: center;
  gap: 2%;

  div {
    width: 30%;
    height: 50%;
    border: 2px solid whitesmoke;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    span {
      font-size: 1.2rem;
    }
  }
`;

export const TitleOfMovie = styled.h1`
  margin-top: 20%;
  font-size: 1.6rem;
  color: whitesmoke;
`

export const ReviewOfMovie = styled.p`
  width: 70%;
  height: 30%;
  font-size: 1.2rem;
  color: whitesmoke;
  text-align: center;
`

export const BtnRemove = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  color: whitesmoke;
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