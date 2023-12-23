import styled from "@emotion/styled";


export const List = styled.ul`
padding: 15px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 15px;
list-style: none;
`;


export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
color: #111;
text-align: center;
width: 250px;
height: 35px;
font-size: 15px;
font-weight: 700;
text-transform: uppercase;
margin: 0 0 5px 0;
`;