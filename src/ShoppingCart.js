import React, {useState} from 'react'

//Este initialCart va a ser un arreglo 
const initialCart = [
    { id:1, title: 'Product', description: 'Desc'},
    { id:2, title: 'Product #2', description: 'Desc #2'}
];

function ShoppingCart() {
    const [cart, setCart] = useState(initialCart);

    const deleteProduct = (productId) => {

        const changedCart = cart.filter(product => product.id !== productId);

        setCart(changedCart);
    }

  return (
    <div>
        {cart.map(product => (
            <div key={product.id}>
                <h1>{product.id} {product.title}</h1>
                <p>{product.description}</p>
                <button onClick={() => deleteProduct(product.id)}>
                    Delete
                </button>
            </div>
        ))}

        
    </div>
  )
}

export { ShoppingCart };