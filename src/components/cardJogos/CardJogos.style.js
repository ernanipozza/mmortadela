import styled from 'styled-components';

export const CardJogo = styled.div`
background: ${(props) => props.theme.verde};
border: 2px solid ${(props) => props.theme.verde};
border-radius: 4px;
width: 205px;
height: 220px;
margin: auto;
margin-bottom: 20px;
padding: 3px;
`;

export const CardJogoImagem = styled.div`
border: 2px;
width: 100%-2px;
height: 74%;
margin: 0;
padding: 2px;
`;

export const CardJogoTitulo = styled.div`
color: ${(props) => props.theme.letra};
border: 2px;
width: 100%-2px;
height: 21%;
text-align: center;
`;