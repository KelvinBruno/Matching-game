import styled from "styled-components";

export const HomeForm = styled.form`
  align-items: center;
  background-color: #f2c9f2;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  font-family: 'Lobster';
`;

export const HomeHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
  img {
    width: 100px;
  }
  h1 {
    color: #08c7c7;
    font-size: 2.5em;
  }
`;
export const HomeInput = styled.input`
  border: 2px solid #08c7c7;
  border-radius: 8px;
  color: #17bdbd;
  font-family: 'Lobster';
  font-size: 1.5em;
  margin-bottom: 15px;
  max-width: 300px;
  outline: none;
  padding: 15px;
  width: 100%;
  outline: none;
  ::placeholder{
    color:#ed5880;
  }
`

export const HomeButton = styled.button`
  background-color: #56f5f5;
  border-radius: 8px;
  font-family: 'Lobster';
  color: #ed5880;
  cursor: pointer;
  font-size: 1.2em;
  max-width: 340px;
  padding: 15px 0px;
  width: 100%;
  :hover{
    background-color: #ed5880;
    color: #17adad;
  }
`