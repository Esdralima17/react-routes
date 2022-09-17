import React from "react";
import { Link } from "react-router-dom";

export default function Usuario() {
    return (
        <div >
            <h1>Usuário</h1>
            <form name="meu_form">
                <input type="text" id="nomeid" placeholder="Tiago Vale" required="required" name="nome" /> 
                <label for="nome">Nome</label> <input type="tel" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="fone" /> 
                <label for="fone">Fone</label> <input type="email" id="emailid" placeholder="fulano@mail.com" name="email" /> 
                <label for="email">Email</label> 
                <textarea placeholder="Deixe sua opnião"></textarea> <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" /> 
            </form> 
            <Link to='/'>retornar a página inicial</Link>
        </div>
 
    );
}

