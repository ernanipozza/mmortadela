import styled from 'styled-components';

export const JogosArea = styled.main`
display: flex;
background: ${(props) => props.theme.roxo};
border: 2px;
width: 100%-2px;
margin: 0;
padding: 3px;
`;

export const CampoBuscaJogosArea = styled.div`
background: ${(props) => props.theme.roxo};
border: 2px;
border-right: 2px solid ${(props) => props.theme.verde};
width: 25%;
margin: 0;
padding: 3px;
`;

export const MostruarioJogosArea = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
background: ${(props) => props.theme.roxo};
border: 2px;
border-left: 2px solid ${(props) => props.theme.verde};
width: 75%;
margin: 0;
padding: 15px;
`;