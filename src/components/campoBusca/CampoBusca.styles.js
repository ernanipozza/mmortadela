import styled from 'styled-components';

export const AreaCampoBusca = styled.div`
background: ${(props) => props.theme.roxo};
height: 100%;
`;

export const Titulo = styled.div`
background: ${(props) => props.theme.roxo};
color: ${(props) => props.theme.letra};
border: 2px;
text-align: center;
line-height: 50px;
width: 100%-2px;
height: 50px;
margin-bottom: 20px;
padding: 3px;
`;

export const InputBuscaArea = styled.div`
background: ${(props) => props.theme.roxo};
border: 2px;
width: 100%-2px;
height: 50px;
padding: 3px;
text-align: center;
line-height: 50px;
margin-bottom: 40px;
`;

export const InputBusca = styled.input`
width: 60%;
text-align: center;
`;

export const BotoesArea = styled.div`
display: flex;
justify-content: space-around;
background: ${(props) => props.theme.roxo};
border: 2px;
width: 100%-2px;
height: 50px;
margin-bottom: 20px;
padding: 3px;
`;

export const BotaoBusca = styled.button`
width:25%;
`;

export const BotaoLimpar = styled.button`
width:25%;
`;