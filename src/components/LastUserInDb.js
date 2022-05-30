import React, { useEffect, useState} from "react";


function LastUserInDb(){
    const [lastUser, setLastUser] = useState([]);
    const [lastUserImgUrl, setLastUserImgUrl] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3005/admin/lastUser")
                const json = await response.json()
                setLastUser(json.response.lastUser);   
                setLastUserImgUrl(json.response.lastUserImgUrl);        
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
      }, [])


      
      return(
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario creado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={lastUserImgUrl}   alt=" img "/>

                            <h3 ><b>Nombre :</b> {lastUser.nombre}</h3>
                            <h3 ><b>Apellido :</b> {lastUser.apellido}</h3>
                            <h3 ><b>Direccion :</b> {lastUser.direccion}</h3>
                            <h3 ><b>Email :</b>  {lastUser.email}</h3>


                            
                        </div>
                        <a className="btn btn-danger" target="_blank" rel="noreferrer" href={`http://localhost:3005/users/mi_cuenta/${lastUser.id}`}>Ver detalle del usuario</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LastUserInDb;