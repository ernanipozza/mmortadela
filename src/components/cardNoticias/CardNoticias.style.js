import styled from 'styled-components';

export const CardNoticia = styled.div`
background: ${(props) => props.theme.verde};
border: 2px solid ${(props) => props.theme.verde};
border-radius: 4px;
width: 205px;
height: 290px;
margin: auto;
margin-bottom: 20px;
padding: 3px;
`;

export const CardNoticiaImagem = styled.div`
border: 2px;
width: 100%-2px;
height: 155px;
margin: 0;
padding: 2px;
`;

export const CardNoticiaTitulo = styled.div`
color: ${(props) => props.theme.letra};
border: 2px;
width: 100%-2px;
text-align: center;
text-decoration: none;
`;