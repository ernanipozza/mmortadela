import styled from 'styled-components';

export const FooterGeral = styled.footer`
display: flex;
background: ${(props) => props.theme.verde};
width: 100%-2px;
height: 100px;
border: 2px;
`;

export const Assinatura = styled.div`
width: 80%;
height: 40px;
background-color: ${(props) => props.theme.verde};
color: ${(props) => props.theme.letra};
text-align: center;
font-size: 14px;
padding: 30px 0px 30px 0px;
`;

export const DivLinksFooter = styled.div`
display: flex;
width: 20%;
justify-content: space-evenly;
padding: 20px;
`;

export const LinkFooter = styled.a`
width: 60px;
height: 60px;
`;

