import style from './Cart.module.css'

const CartPage = () => {
    return (
        <div className={style.container}>
            <h1 style={{textAlign: "center",margin:'30px'}}>CART</h1>
           <table className={style.main_table}>
           <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th className={style.td}>ACTION</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>
              <a href="#"><img src="public/img/product-img-1.webp" alt="" /></a>
              Classic Oxford Shirt
            </td>
            <td>5000</td>
            <td>- 1 +</td>
            <td>1000</td>
            <td className={style.td}>X</td>
          </tr>
        <tr>
            <td>
              <a href="#"><img src="public/img/product-img-1.webp" alt="" /></a>
              Classic Oxford Shirt
            </td>
            <td>5000</td>
            <td>- 1 +</td>
            <td>1000</td>
            <td className={style.td}>X</td>
          </tr>
        <tr>
            <td>
              <a href="#"><img src="public/img/product-img-1.webp" alt="" /></a>
              Classic Oxford Shirt
            </td>
            <td>5000</td>
            <td>- 1 +</td>
            <td>1000</td>
            <td className={style.td}>X</td>
          </tr>
        <tr>
            <td>
              <a href="#"><img src="public/img/product-img-1.webp" alt="" /></a>
              Classic Oxford Shirt
            </td>
            <td>5000</td>
            <td>- 1 +</td>
            <td>1000</td>
            <td className={style.td}>X</td>
          </tr>
        </tbody>
            </table>
        </div>
    );
};

export default CartPage;