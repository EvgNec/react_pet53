import styled from 'styled-components';

export const CastWrapper = styled.div`
  padding: 20px;
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
`;

export const CastItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const CastImage = styled.img`
  border-radius: 8px;
  width: 100%;
  height: auto;
`;

export const Placeholder = styled.div`
  height: 200px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #555;
  font-size: 14px;
`;