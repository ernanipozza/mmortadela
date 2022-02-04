import React from 'react';
import { useFormik } from 'formik';

export const Formulario11 = () => {
    const formik = useFormik ({
        valoresIniciais : {
            nome: '',
            email: '',
            comentario: '',
        },
        onSubmit : valores => {
            alert(JSON.stringify(valores, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
                id="nome"
                nome="nome"
                type="text"
                onChange={formik.handleChange}
                value={formik.valores.nome}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                nome="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.valores.email}
            />
            <label htmlFor="comentario">Comentário</label>
            <input
                id="comentario"
                nome="comentario"
                type="text"
                onChange={formik.handleChange}
                value={formik.valores.comentario}
            />
            <button type="submit">Enviar Comentário</button>
        </form>
    );
};