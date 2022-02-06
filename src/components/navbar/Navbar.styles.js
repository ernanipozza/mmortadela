import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
display: flex;
background: ${(props) => props.theme.verde};
border: 2px;
width: 100%-2px;
height: 100px;
`;

export const BannerHeader = styled.div`
width: 60%;
background-color: ${(props) => props.theme.verde};
`;

export const BotoesHeader = styled.div`
display: flex;
justify-content: space-evenly;
width: 40%;
`;

export const BotaoHeader = styled(Link)`
background: ${(props) => props.theme.roxo};
border: 2px;
border-radius: 3px;
width: 150px;
color: ${(props) => props.theme.letra};
font-size: 1.2rem;
margin: 1rem;
padding: 1rem 1.5rem;
text-align: center;
`;

export const BotaoTema = styled.button`
background: ${(props) => props.theme.roxo};
border: 2px solid ${(props) => props.theme.borda};
color: ${(props) => props.theme.letra};
border-radius: 3px;
width: 60px;
font-size: 1rem;
margin: 1rem;
text-align: center;
`;