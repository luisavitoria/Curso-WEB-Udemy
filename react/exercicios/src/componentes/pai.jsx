import React from "react";

function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        {/* <ul> 
            <Filho nome='Pedro' sobrenome={props.sobrenome} />
            <Filho {...props} /> 
            <Filho {...props} nome='Carla' />
        
        </ul>
        */}
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>


//spread {...props}- herda todas propriedades do pai