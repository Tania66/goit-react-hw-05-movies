import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapp = styled.div`
padding:0 15px 15px  15px;
`;


export const Info = styled.div`
display: flex;
gap: 20px;
margin-bottom: 20px;
`;


export const Span = styled.span`
display: flex;
flex-direction: column;
`;


export const LinksStyle = styled(Link)`
margin-top: 15px;
text-decoration:none;
background-color: #8C31FF;
color: white;
padding: 10px;
border-radius: 5px;
`;

export const ContentWrapp = styled.div`
  border-radius: 26px;
border: 0.5px solid #424750;
background: #282C30;
box-shadow: 4px 4px 20px 0px rgba(16, 16, 18, 0.75), -3px -3px 15px 0px #262E32;
padding: 10px;
`;

export const MovieTitle = styled.h1`
color:#F5F6F8;
`;

export const MovieSubTitle = styled.h2`
color:#F5F6F8;
`;

export const MovieText = styled.p`
color:#F5F6F8;
`;


export const LinkList = styled.ul`
display: flex;
list-style: none;
gap: 15px;
padding: 15px;
`;


