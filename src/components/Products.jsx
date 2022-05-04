import React, {useState} from 'react'
import DataBase from '../database/database.json'

function Products() {

    const[productData, setProductData] = useState(DataBase)

    return (
        <div className='productList'>
            <div className='wrapper' id='product-wrapper'>
                {productData.map(({id, name, price, image, colors, description}) => (
                    <div className='productCard' key={id}>
                        <div>
                            <img src={require(`../images/${image}`)} alt="" width="300px" />
                        </div>
                        <div className='productCardInfo'>
                            <h4>{name}</h4>
                            <h2>${price},00</h2>
                        </div>
                        <div className='productCardButtons'>
                            <button>Add To Cart</button>
                            <button>Learn More</button>
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    )
}

export default Products