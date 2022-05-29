import React from 'react'



const TablaUsuariosRow = (props) => {
    
    
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre} {props.apellido}</td>
                <td>{props.email}</td>
                <td><a href={`http://localhost:3005/users/mi_cuenta/${props.id}`}>Link</a></td>
                
            </tr>

        </>
    )
}

export default TablaUsuariosRow