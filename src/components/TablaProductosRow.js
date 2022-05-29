import React from 'react'

const TablaProductosRow = (props) => {
    
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>{props.descripcion}</td>
                <td>{props.categorias.nombre}</td>
                <td><a href={`http://localhost:3005/products/detalle_producto/${props.id}`}>Link</a></td>
            </tr>

        </>
    )
}

export default TablaProductosRow