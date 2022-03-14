import React from "react"

export default props => 
    <div>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até breve!</h2>
    </div> 

    //ou

   /* <React.Fragment>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até breve!</h2>
    </React.Fragment> */

    //ou

    /* import React, { Fragment } from 'react 

         <Fragment>
            tags...
         </Fragment>
    */
     
     //ou 

     /*<>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até breve!</h2>
     </> */

     //ou

    /*[
        <h1 key='h1'>Bom dia, {props.nome}!</h1>,
        <h2 key='h2'>Até breve!</h2>
    ] */ //cada elemento deve ter uma chave quando em array

