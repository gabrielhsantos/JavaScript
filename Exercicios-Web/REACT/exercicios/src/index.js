import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
// import Multi, { BoaNoite } from './componentes/Multiplos.jsx'

// ReactDOM.render(<Saudacao tipo="Bom dia" nome="Thomas" />, document.getElementById('root'))

ReactDOM.render(
    <Fragment>
        <Pai nome="Gabriel" sobrenome="Santos">
            <Filho nome="Thomas" />
            <Filho nome="Helena" />
        </Pai>
    </Fragment>
, document.getElementById('root'))