import './Product.css'

function Product3(props) {
    return (
        <div className="card" >
        <img src={props.product.image} alt=""/>
        <h1>{props.product.title}</h1>
        <p>{props.product.description}</p>
        <p>Price: {props.product.price}</p>
        <button onClick={() => {
                console.log('you are going to buy this product',props.product.price)
        }}>Buy</button>
    </div>
    )
}

export default Product3;