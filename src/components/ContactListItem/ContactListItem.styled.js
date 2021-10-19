import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 1fr) 98px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 2px;
  height: 60px;
`;
export const Span = styled.span`
  padding: 15px 8px;
`;
export const Button = styled.button`
  width: 70px;
  height: 30px;
  margin: 15px 5px;
  padding: 5px 10px;
  color: #f71c0c;
  border: 1px solid #723a3a;
  border-radius: 5px;
`;
