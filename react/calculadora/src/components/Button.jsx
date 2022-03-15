import React from "react";
import './Button.css'

export default props => 
    <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}
        onClick={e => props.click && props.click(props.label)}
    >
        
        {props.label}
    </button>


//ou 
/*
export default props => {
    let classes = 'button'
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button className={classes}>
            {props.label}
        </button>
    )
}

*/