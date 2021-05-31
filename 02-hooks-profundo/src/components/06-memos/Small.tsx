import React, { memo } from 'react'

type Valor = {
    valor: number
}

export const Small = memo(({valor}: Valor) => {

    console.log('Componente Small');
    // http?
    
    return (
        <small>{valor}</small>
    )
}
);
