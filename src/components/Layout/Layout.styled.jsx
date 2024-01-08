import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
   display: flex;
-webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
background: #14161B;
border-radius: 0px 0px 8px 8px;
padding: 10px;
margin-bottom: 25px;
`;


export const List = styled.ul`
  display: flex;
gap: 10px;
list-style: none;
`;


export const Link = styled(NavLink)`
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    color:#ffff;
    
  &.active {
    color: #8C31FF;
  }
`;