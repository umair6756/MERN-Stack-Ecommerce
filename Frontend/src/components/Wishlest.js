import React, { useContext } from 'react'
import './CartWishlest.css'
import { CartContext } from './CartContext'


const Wishlest = () => {
    const {wishlest, addToCart,removeFromWishlest} = useContext(CartContext);

    const handleRemoveFromWishlest = (index) => {
      removeFromWishlest(index)
    }
  return (
    <div>
        <div className="cart-wrap" >
  <div className="container" style={{paddingTop:'3rem'}}>
    <div className="row">
      <div className="col-md-12">
        <div className="main-heading mb-10 my-3">My wishlist</div>
        <div className="table-wishlist">
          <table cellPadding={0} cellSpacing={0} border={0} width="100%" className='my-5'>
            <thead>
              <tr>
                <th width="45%" className='productName-th'>Product Name</th>
                <th width="15%">Unit Price</th>
                <th width="15%" className='stock-th'>Stock Status</th>
                <th width="15%" />
                <th width="10%" />
              </tr>
            </thead>
            <tbody>
             {wishlest.map((items, index) => (
              <tr key={index}>  
                <td width="45%" className='productName-td'>
                  <div className="display-flex align-center">
                    <div className="img-product">
                      <img
                        src={items.image}
                        alt=""
                        className="mCS_img_loaded"
                      />
                    </div>
                    <div className="name-product">{items.name}</div>
                  </div>
                </td>
                <td width="15%" className="price">
                {items.onSale ? (
                                      
                                      <span>{items.price - (items.price * items.sale / 100)}</span>
                                      
                                ): items.price}
                </td>
                <td width="15%" className='inStock-td'>
                  <span className="in-stock-box">In Stock</span>
                </td>
                <td width="15%" className='addToCart-td'>
                  <button className="round-black-btn small-btn"  onClick={() => {addToCart(items);}}>
                    Add to Cart
                  </button>
                </td>
                <td width="10%" className="text-center">
                  <button className="trash-icon border border-0 bg-transparent text-danger" onClick={() => {handleRemoveFromWishlest(index)}}>
                    <i className="far fa-trash-alt" />
                  </button>
                </td>
              </tr>
              ))}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Wishlest