import React, { useEffect, useState} from "react";


function LastProductInDb(){
    const [lastProduct, setLastProduct] = useState([]);
    const [lastProductImgUrl, setLastProductImgUrl] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3005/admin/lastProduct")
                const json = await response.json()
                setLastProduct(json.response.lastProduct);   
                setLastProductImgUrl(json.response.lastProductImgUrl);       
            } catch (error) {
                
            }
        };



        fetchData() 
      }, [])

     

      
      return(
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <h3 className="Mueble">{lastProduct.nombre}</h3>
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={lastProductImgUrl} alt=" img "/>
                        </div>
                        <p>{lastProduct.descripcion}</p>
                        <a className="btn btn-danger" target="_blank" rel="noreferrer" href={`http://localhost:3005/products/detalle_producto/${lastProduct.id}`}>Ver detalle del producto</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LastProductInDb;