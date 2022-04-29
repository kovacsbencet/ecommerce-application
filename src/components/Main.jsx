import React, {useState, useEffect} from 'react'


function Main() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        
    },[])
    
    return (
        <div>
            {products.map(({id, price, image, description}) => (
                <div>
                    <h2 key={id}>{price}</h2>
                    
                </div>
            ))}
        </div>
    )
}

export default Main
