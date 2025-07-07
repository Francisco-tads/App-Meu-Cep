import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1{
    margin-top:4rem;
    color:var(--white);
  }
  
  div.containerInput {
    background-color: #1e90ff;
    padding: 15px;
    margin: 34px 0;
    display: flex;
    border-radius: 35px;
    input {
      background-color: transparent;
      border: 0;
      font-size: 20px;
      color: white;
      outline: none;
      margin-right: 8px;
    }
    button {
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.5s;
    :hover {
      transform: scale(1.2);
    }}}

  input::placeholder {
    color: white;
  }

  div.main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #F2F2F2;
    width: 75%;
    border-radius: 10px;
    padding: 20px;
    h2 {
      margin: 5px 0;
      font-size: 20px;
    }
    span {
      margin-bottom: 9px;
    }
    .mapButton {
      background-color: #1e90ff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 15px;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #0066cc;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
