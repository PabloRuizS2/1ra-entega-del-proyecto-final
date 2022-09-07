import React from "react";
import ItemCount from "./ItemCount";


function ProductDetail({title, price, image, description}){
    return (
        <div className="product-detail">
            
            <div className="detail-image">
                <img src={image} alt={ `${title}`} />
            </div>
            <div className="detail-body">
                <div className="detail-title">
                    <h3>{title}</h3>
                </div>
                <div className="detail-description">
                    <p>
                        {description}
                    </p>

                </div>
                <div className="detail-price">
                    <p>
                        {price}
                    </p>
                </div>
                <ItemCount initial={1} stock={10} unit={1}/>     

            </div>
            
        </div>
    )

}

function ItemDetail({ data }) {

    console.log(data)

    
     
    return (
        <>  
            <ProductDetail title={data.title} image={data.image} price={data.price} description={data.description}/>       
        </>)
}

export default ItemDetail