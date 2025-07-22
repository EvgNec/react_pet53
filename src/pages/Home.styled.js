import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: blue;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const Grid = styled.ul`
  /* display: grid; */
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const Card = styled.li`
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;