import "./carts.css"
import { api } from "../../api";

import { useEffect, useState } from "react";

const Carts = () => {
  const [carts, setCarts] = useState<any[]>([]);
  // const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
      (async () => {
        const response = await api.get('/carts')
        const data = response.data
        setCarts(data.carts)
        console.log(data.carts)
        // setLoading(false)
      })()

  }, [])
  
  
  return (
    <>
    <div className="main-container">
      {/* {loading? <div className="loading-box">
        <div className="loading-spinner"></div>
        Loading...
      </div> : null} */}
      {carts?.map(cart => (
        <div className="card-container" key={cart.id}>
          <h1>Total price: {cart.total}</h1>
          <h2>Total products: {cart.totalProducts}</h2>
          <h3>Total quantity: {cart.totalQuantity}</h3>
          <div className="cart-products">
            {cart.products.map((product: any) => (
              <div className="product" key={product.id}>
                <title>{product.title}</title>
                <h1>Discount: {product.discountPercentage}%</h1>
                <h1>Discount sum: {product.discountTotal}$</h1>
                <h1>Price: {product.price}$</h1>
                <h3>Quantity: {product.quantity}</h3>
                <img src={product.thumbnail} />
                <h2>{product.total}</h2>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
    </>
  )
};

export default Carts;

