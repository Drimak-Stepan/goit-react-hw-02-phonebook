import styled from '@emotion/styled';

export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  border: 2px solid #3216e4;
`;

export const StatsLi = styled.li`
  position: relative;
  padding: 14px;
`;

export const Item = styled.span`
  font-size: 20px;
  font-weight: 700;
  padding: 8px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid blue;
`;

export const Btn = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-weight: 700;
  font-size: 20px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid blue;
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
