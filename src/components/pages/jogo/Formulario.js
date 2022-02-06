import { Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import { useParams } from "react-router-dom";
import { ComentariosArea, ComentariosAreaTitulo, ComentariosAreaSubtitulo, NomeSalvo, ComentarioSalvo, ComentarioSalvoTexto, ComentarioSalvoVotos, AreaVotos, Upvote, Downvote, AreaContadorVotos } from "./Jogo.style"
import ImgDownvote from "../../../assets/ImgDownvote.png";
import ImgUpvote from "../../../assets/ImgUpvote.png";

var arrayComentarios = localStorage.getItem('comentarios')?JSON.parse(localStorage.getItem('comentarios')):[];

export const Formulario = () => {

    const idJogo = useParams();

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        setTimeout(() => {
            const id = "id" + Math.random().toString(16).slice(2);
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const comentario = document.getElementById('comentario').value;
            
            arrayComentarios.push({id, nome, email, comentario})
            const arrayComentariosString = JSON.stringify(arrayComentarios);
            localStorage.setItem(idJogo, arrayComentariosString)

            setSubmitting(false);
            resetForm({
                nome:'',
                email:'',
                comentario:''
            });
        }, 500);
    };

    const schema = Yup.object().shape({
    nome: Yup.string().required('Você deve informar seu nome.'),
    email: Yup.string().required('Você deve informar seu email.').email('E-mail inválido.'),
    comentario: Yup.string().required('Não é possível enviar um comentário vazio.').max(100)
    })

    return (
        <>
            <ComentariosAreaTitulo>DESCE A LETRA!</ComentariosAreaTitulo>
            <ComentariosAreaSubtitulo>Digite aqui seu comentário sobre o jogo! (máximo de 100 caracteres)</ComentariosAreaSubtitulo>
            <Formik initialValues={{nome: '',email: '',comentario: ''}} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
                {({isSubmitting, resetForm, isValid}) => (
                    <Form>
                        <Field id="nome" name="nome" placeholder="Informe seu nome" required type="text"/>
                        <Field id="email" name="email" placeholder="email@mail.com" required type="email"/>
                        <Field id="comentario" name="comentario" placeholder="Digite seu comentário..." required type="text"/>
                        <button type='submit' disabled={isSubmitting || !isValid}>ENVIAR COMENTÁRIO</button>
                    </Form>
                )}
            </Formik>
            <ComentariosArea>COMENTÁRIOS
                <ComentarioSalvo>
                <NomeSalvo></NomeSalvo>    
                <ComentarioSalvoTexto></ComentarioSalvoTexto>
                <ComentarioSalvoVotos>
                    <AreaVotos>
                        <Upvote><img src={ImgUpvote} width="35px" height="35px"></img></Upvote>
                        <Downvote><img src={ImgDownvote} width="35px" height="35px"></img></Downvote>
                    </AreaVotos>
                    <AreaContadorVotos> 50 </AreaContadorVotos>
                </ComentarioSalvoVotos>
                </ComentarioSalvo>
            </ComentariosArea>
        </>
    );
};