import React, { useState, useEffect } from "react";



function TotalCategoriesInDb () {

    const [totalCategories, setTotalCategories] = useState([])

    useEffect( () => {
        fetch("http://localhost:3005/admin/productos")
            .then(respuesta => {
                return respuesta
            })
            .then(totalCategories => {
                setTotalCategories(totalCategories.response.countByCategory.categorias)
            })
    }, [])

     
       
            
                
                         {/* totalProducts.map((product,index)=>{
                             return <Product {...product} key={index} />
                            }) */}
                    let categoriaInDb = {
                            title: 'Total de Categorias en la DataBase',
                            color: 'danger', 
                            cuantity: {totalCategories},
                            icon: 'fa-clipboard-list'}
                        
        
      
   
}



    export default TotalCategoriesInDb