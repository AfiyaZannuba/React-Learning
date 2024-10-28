const ProductInfo = () => {
    const Product = {
        name: 'Laptop',
        price: 1200,
        availability: "In-Stock",
    }
    return (
        <div>
            <h1>Name: {Product.name}</h1>
            <h2>Price: ${Product.price}</h2>
            <h3>Availability: {Product.availability}</h3>
        </div>
    )
}

export default ProductInfo;