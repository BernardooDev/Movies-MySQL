import styled from "styled-components";

export const CrudPage = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CrudContainer = styled.div`
  width: 40%;
  height: 70%;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const ListContainer = styled.div`
  width: 20%;
  height: 70%;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const DivName = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  input {
    width: 70%;
    outline: none;
    padding: 0.5rem 0.5rem;
    border: none;
    border-bottom: 1px solid;
  }
`;

export const DivReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  width: 40%;

  textarea {
    height: 70%;
    width: 100%;
    padding: 0.5rem 0.5rem;
  }
`;

export const DivRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1%;
  flex-direction: row;
  width: 40%;

  input[type="range"] {
    border: 1px solid black;
    accent-color: red;
    outline: none;
    width: 50%;
  }
`;

export const BtnCrud = styled.button`
    width: 15%;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
`

export const DivWatched = styled.div`
  border: 2px solid;
  width: 50%;
  border-radius: 20px;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    width: 100%;

    &:active {
      color: blue; 
    }
  }
`