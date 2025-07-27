import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  max-width: 500px;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 10px 14px;
  width: 100%;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0077ff;
  }
`;

export const Button = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  background-color: #0077ff;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fd4;
  }
`;