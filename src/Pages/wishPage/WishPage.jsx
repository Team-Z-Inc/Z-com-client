

import style from './Wish.module.css';

const WishPage = () => {
  return (
    <div className={style.container}>
      <h1 style={{textAlign: "center",margin:'30px'}}>WishList</h1>
      <table className={style.main_table}>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
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
            <td className={style.td}>X</td>
          </tr>
          <tr>
            <td>
              <a href="#"><img src="public/img/product-img-1.webp" alt="" /></a>
              Classic Oxford Shirt
            </td>
            <td>5000</td>
            <td className={style.td}>X</td>
          </tr>
          <tr>
            <td>
              <a href="#"><img src="public/img/product-img-1.webp" alt="" /></a>
              Classic Oxford Shirt
            </td>
            <td>5000</td>
            <td className={style.td}>X</td>
          </tr>
          <tr>
            <td>
              <a href="#"><img src="public/img/product-img-1.webp" alt="" /></a>
              Classic Oxford Shirt
            </td>
            <td>5000</td>
            <td className={style.td}>X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WishPage;
