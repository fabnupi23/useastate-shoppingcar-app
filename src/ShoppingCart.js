import React, {useState} from 'react'

//Este initialCart va a ser un arreglo 
const initialCart = [
    { id:1, title: 'Product', description: 'Desc'},
    { id:2, title: 'Product #2', description: 'Desc #2'}
];

function ShoppingCart() {
    const [cart, setCart] = useState(initialCart);

    const addProduct = (newProduct) => {

        newProduct.id = Date.now();

        const changedCart = [
            newProduct,
            ...cart,            
        ];

        setCart(changedCart);
    }


    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => (
            product.id === editProduct.id
            ? editProduct
            : product
        ))
        setCart(changedCart);
    }



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
                <button onClick={() => updateProduct({id: product.id, title: "Edit título", description: "Edit Desc"})}> {/*vamos a pasar un objeto que va a representar el producto*/}
                    Actualizar
                </button>  
            </div>
        ))}
        <button onClick={() => addProduct({title: "Nuevo título", description: "Nueva Desc"})}> {/*vamos a pasar un objeto que va a representar el producto*/}
            Agregar
        </button>      
        <br/>
        <br/>
        <pre>
            {/*Imprimir un arreglo en pantalla*/}
            {JSON.stringify(cart, null, 2)}
        </pre>
        
    </div>
  )
}

export { ShoppingCart };