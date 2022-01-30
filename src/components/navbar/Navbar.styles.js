import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
display: flex;
background: yellow;
border: 2px solid blue;
width: 100%-2px;
height: 100px;
`;

export const BannerHeader = styled.div`
width: 60%;
background-color: green;
`;

export const BotoesHeader = styled.div`
display: flex;
justify-content: space-evenly;
width: 40%;
`;

export const BotaoHeader = styled(Link)`
background: #0099FF;
border: 2px solid #0099FF;
border-radius: 3px;
width: 150px;
color: #FDFDFD;
font-size: 1.2rem;
margin: 1rem;
padding: 1rem 1.5rem;
text-align: center;
`;