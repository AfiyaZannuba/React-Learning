const Product = (props) => {
    return(
        <section>
            <h2>Product Name: {props.name}</h2>
            <p>Product Price: {props.price}</p>
        </section>
    )
}

export default Product;