import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-around;
`;
export const Button = styled.button`
  width: 90px;
  padding: 5px;
  &:hover,
  &:focus {
    color: white;
    background-color: darkgrey;
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
  }
`;
