import React from "react";

//export default nao precisa de constante, let...
//só o export, precisa
export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

export default {BoaTarde, BoaNoite} //cria um objeto