import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { decreaseCart,addtocart,removeFromCart } from '../../features/cartSlice'
function Cartsingle({cart}) {
    const { id, name, price, image, cartQuantity } = cart
    const dispatch = useDispatch()
   
    const increaseQuantity = (mycart) => {
        dispatch(addtocart(mycart))
       
    }

    const decreaseQuantity = (mycart) => {
         
       dispatch(decreaseCart(mycart))
    }

    const removecartproduct = (mycart) => {
        dispatch(removeFromCart(mycart))
    }
  return (
      <div className="product">
          <div className="row">
              <div className="col-md-3">
                  <img className="img-fluid mx-auto d-block image" src={image} />
              </div>
              <div className="col-md-8">
                  <div className="info">
                      <div className="row">
                          <div className="col-md-5 product-name">
                              <div className="product-name">
                                  <h2>{name}</h2>
                                  <div className="product-info">
                                    
                                      <button className='remove' onClick={()=>removecartproduct(cart)}>Remove</button>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4 quantity">
                              <label htmlFor="quantity">Quantity:</label>
                              
                              <form>
                                  <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value" onClick={()=>decreaseQuantity(cart)}>-</div>
                                  <input type="number" id="number" value={cartQuantity} />
                                  <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value" onClick={()=>increaseQuantity(cart)}>+</div>
                              </form>
                          </div>
                          <div className="col-md-3 price">
                              <span>${price * cartQuantity}</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Cartsingle