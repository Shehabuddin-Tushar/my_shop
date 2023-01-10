import React,{useEffect} from 'react'
import './Cart.css'
import Cartsingle from './Cartsingle'
import { useSelector, useDispatch } from 'react-redux'
import {getTotals} from '../../features/cartSlice'
import {Link,useNavigate} from 'react-router-dom'
import Paybutton from '../Paybutton/Paybutton'
function CartComp() {

    const carts = useSelector(state => state.carts.cartItems)
    const cartTotal = useSelector(state => state.carts)
    const authuser = useSelector(state => state.auth)
    console.log(carts)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getTotals());
    }, [carts, dispatch]);
  return (
      <main class="page">
          <section className="shopping-cart dark">
              <div className="container">
                  <div className="block-heading">
                      <h1>Shopping Cart</h1>
                      
                  </div>
                  <div className="content">
                      <div className="row">
                          <div className="col-md-12 col-lg-8">
                              <div className="items">
                                  {
                                      carts.length == 0 ? (
                                          <div className="cart-empty">
                                              <p>Your cart is currently empty</p>
                                              <div className="start-shopping">
                                                  <Link to="/">
                                                      <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="20"
                                                          height="20"
                                                          fill="currentColor"
                                                          className="bi bi-arrow-left"
                                                          viewBox="0 0 16 16"
                                                      >
                                                          <path
                                                              fillRule="evenodd"
                                                              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                                          />
                                                      </svg>
                                                      <span>Start Shopping</span>
                                                  </Link>
                                              </div>
                                          </div>
                                      ) : (
                                      
                                              <>
                                                  {carts.map((cart) => {
                                                      return (<Cartsingle key={cart.id} cart={cart} />)
                                                  })}
                                              </>
                                              
                                          )
                                  }
                                 
                                  
                                 
                              </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                              <div className="summary">
                                  <h3>Summary</h3>
                                  <div className="summary-item"><span className="text">Subtotal</span><span className="price">${cartTotal.cartTotalAmount}</span></div>
                                  <div className="summary-item"><span className="text">Discount</span><span className="price">$10</span></div>
                                  <div className="summary-item"><span className="text">Shipping</span><span className="price">$25</span></div>
                                  <div className="summary-item"><span className="text">Total</span><span className="price">${cartTotal.cartTotalAmount > 0 ? cartTotal.cartTotalAmount + 10 + 25 : 0}</span></div>
                                  {
                                      authuser._id ? <Paybutton cartitems={carts} /> : <button type="button" className="btn btn-danger btn-lg btn-block checkout" onClick={()=>{navigate("/login")}}>Login to Checkout</button>
                                  }
                                  
                            
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  )
}

export default CartComp