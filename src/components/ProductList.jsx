const ProductList = () => {

    const Products = [
        {
            id: 1,
            name: "Phone",
            price: '$699'
        },
        {
            id: 1,
            name: "Laptop",
            price: '$1299'
        },
        {
            id: 1,
            name: "Head Phone",
            price: '$159'
        }
    ]

    return (
        <div>
            {Products.map((product)=>(
                <div key={product.id}>
                    <h1>Product Name : {product.name}</h1>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductList;