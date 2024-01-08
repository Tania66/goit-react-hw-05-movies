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
  border-radius: 26px;
border: 0.5px solid #424750;
background: #282C30;
box-shadow: 4px 4px 20px 0px rgba(16, 16, 18, 0.75), -3px -3px 15px 0px #262E32;
padding: 10px;
`;

export const ImgPoster = styled.img`
 border-radius: 26px;
`;

export const Title = styled.h1`
color: #fff;
text-align: center;
width: 250px;
height: 35px;
font-size: 15px;
font-weight: 700;
text-transform: uppercase;
margin-bottom: 0;
`;

export const ErrorMessage = styled.p`
color:#F5F6F8;
text-align: center;
`;