import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function CategoryCard({name, image}){
    return (
        <>

        <div className='category-card'>
            <div className='category-image' style={{backgroundImage:`url(${image})`}}>
                
            </div>
            <div className='category-name'>
                <h3>{name}</h3>

            </div>

        </div>
        
        </>
    )

}

function Categories(){
    
    const categoriesArray = [
        {
            name:'Celulares', 
            id:'1', 
            image:'https://www.mgmstore.com.ar/28-home_default/Apple-iPhone-11-64GB.jpg'
        },
        {
            name:'Cargadores', 
            id:'2', 
            image:'https://w7.pngwing.com/pngs/857/954/png-transparent-mobile-phone-accessories-charger-connection-line-data-lines-cellphone-data-line.png'
        },
        {
            name:"Auriculares", 
            id:'3', 
            image:'data:image/jpeg;base64,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'
        },
        {
            name:"Fundas", 
            id:'4', 
            image:'https://www.cronista.com/files/image/432/432795/61f5dd29f0f07_950_534!.jpg?s=6a12382cb21d01704bff88d4229844bf&d=1643836063'
        }
        
        
    ]

    return (
        <>  

            { categoriesArray.map(category =>{

                return <Link key={category.id} to={`/category/${category.id}`}>
                    <CategoryCard  name={category.name} image={category.image}/>
                </Link>
                
                
                
                }) 
            }
        </>

    )
    

    
}
function CategoriesContainer(){
    return (
        <div className='categories-container'>
            <Categories/>
        </div>
        
    )

}
export default CategoriesContainer