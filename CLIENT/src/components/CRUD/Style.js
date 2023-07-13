import styled from "styled-components";

export const CrudPage = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #16122A
`;

export const CrudContainer = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;


  h1 {
    color: whitesmoke;
    font-size: 2.4rem;
  }
`;

export const ListContainer = styled.div`
  width: 20%;
  height: 70%;
  border-left: 0.1px solid whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   
  h1 {
    color: whitesmoke;
  }

`

export const DivName = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  label {
    color: whitesmoke;
    font-size: 1.6rem;
  }
  input {
    width: 100%;
    outline: none;
    padding: 0.5rem 0.5rem;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    font-size: 1rem;
    color: whitesmoke;
  }
`;

export const DivReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 70%;

  label {
    color: whitesmoke;
    font-size: 1.6rem;
  }

  textarea {
    height: 70%;
    width: 100%;
    padding: 0.5rem 0.5rem;
    background-color: transparent;
    outline: none;
    border: 1px solid black;
    color: whitesmoke;
  }
`;

export const DivRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40%;
  height: 10%;
  color: whitesmoke;
  font-size: 1.2rem;

  input[type="range"] {
    accent-color: whitesmoke;
    background-color: transparent;
    outline: none;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const BtnCrud = styled.button`
    width: 15%;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    background-color: transparent;
    border: none;
    svg {
      width: 100%;
      height: 120%;
      color: whitesmoke;
    }
`

export const DivWatched = styled.div`
  border: 2px solid;
  width: 50%;
  border-radius: 20px;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  a {
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    color: whitesmoke;

    &:active {
      color: blue; 
    }
  }
`
