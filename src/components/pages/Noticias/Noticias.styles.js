import styled from 'styled-components';

export const NoticiasArea = styled.main`
display: flex;
background: ${(props) => props.theme.roxo};
border: 2px;
width: 100%-2px;
margin: 0;
padding: 3px;
`;

export const CampoBuscaNoticiasArea = styled.div`
background: ${(props) => props.theme.roxo};
border: 2px;
border-right: 2px solid ${(props) => props.theme.verde};
width: 25%;
margin: 0;
padding: 3px;
`;

export const MostruarioNoticiasArea = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
background: ${(props) => props.theme.roxo};
border: 2px;
border-left: 2px solid ${(props) => props.theme.verde};
width: 75%;
margin: 0;
padding: 15px;
`;