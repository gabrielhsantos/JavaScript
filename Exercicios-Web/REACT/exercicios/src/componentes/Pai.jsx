import React, { Fragment } from 'react'
import { childrenWithProps } from '../utils/utils'

export default props => 
    <Fragment>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>            
            {childrenWithProps(props)}            
        </ul>
    </Fragment>