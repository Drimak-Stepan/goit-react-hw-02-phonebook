import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 10px;
  border: 2px solid rgb(51, 69, 230);
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 20px;
  color: black;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid blue;
  outline-color: blue;
`;

export const Btn = styled.button`
  font-weight: 700;
  font-size: 20px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid blue;
  outline-color: blue;
  cursor: pointer;
  color: black;
  background-color: white;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: blue;
    color: yellow;
  }
`;
