import React from 'react'
import ReactDom from 'react-dom'

//import BomDia from './componentes/BomDia'

//import { BoaTarde, BoaNoite } from './componentes/Multiplos'

//import Multiplos from './componentes/Multiplos'

//import Multi, {BoaNoite} from './componentes/Multiplos'

//componentes sempre com letra maiuscula


/*ReactDom.render(
    <div>
        <BoaTarde nome='Ana'></BoaTarde>
        <BoaNoite nome='Bia' />
    </div>
, document.getElementById('root'))*/

/*ReactDom.render(
    <div>
        <Multiplos.BoaTarde nome="Joao" />
        <Multiplos.BoaNoite nome='Pedro'/>

    </div>
, document.getElementById('root'))

ReactDom.render(
    <div>
        <Multi.BoaTarde nome="Lucas" />
        <BoaNoite nome='Pedro'/>

    </div>
, document.getElementById('root')) */

/*
import Saudacoes from './componentes/saudacoes'

ReactDom.render(
    <div>
        <Saudacoes tipo='Bom dia' nome='João' />
    </div>
, document.getElementById('root')
)
*/

import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDom.render(
    <div>
        <Pai nome='João' sobrenome='Silva'>
            {/* como passo os componentes filhos aqui? */}
            <Filho nome='Pedro' />
            <Filho nome='Paulo' />
            <Filho nome='Carla' />
        </ Pai>
    </div>
, document.getElementById('root')
)