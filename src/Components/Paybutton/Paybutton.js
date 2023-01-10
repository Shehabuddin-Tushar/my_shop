import React,{useState} from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import {clearCart} from '../../features/cartSlice'
import { toast } from 'react-toastify';

function Paybutton() {
   
    
    const carts = useSelector(state => state.carts.cartItems)
    console.log(carts)
    const user = useSelector(state => state.auth)
    const cartTotal = useSelector(state => state.carts)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const publishableKey="pk_test_51Jw9OEBh107PE7HCu5vw3WcMDMtlsrImA5bZQoFt2JWh2mH9L9gIktkIrBPawAAOuL22PRwUBqquQksOpgkTp3Ss00mpYRA2Ng"
    // const handleCheckout = () => {
       
    // //     console.log(user._id)
    // //     const headers = {
    // //         'Content-Type': 'application/json',
    // //         'Authorization': "Bearer pk_test_51Jw9OEBh107PE7HCu5vw3WcMDMtlsrImA5bZQoFt2JWh2mH9L9gIktkIrBPawAAOuL22PRwUBqquQksOpgkTp3Ss00mpYRA2Ng"
    // //     }
    //     axios
    //         .post(`http://localhost:8080/stripe/create-checkout-session`, {
    //             cartitems,
    //             userId: user._id,
    //         }
                
    //         )
    //         .then((response) => {
    //             if (response.data.url) {
    //                 window.location.href = response.data.url;
    //             }
    //         })
    //         .catch((err) => console.log(err.message));
    // };

    const payNow = async token => {
        try {
            const response = await axios({
                url: 'http://localhost:8080/payment',
                method: 'post',
                data: {
                    token,
                    cartitems:carts,
                    amount:cartTotal.cartTotalAmount+10+25,
                    userId:user._id
                },
            });
            if (response.status === 200) {
                toast("payment success", { position: "bottom-left" })
                dispatch(clearCart())
                navigate("/checkout-success")
                
            }
        } catch (error) {
            toast("payment failed", { position: "bottom-left" })
            console.log(error);
        }
    };

  return (
      <>
          {/* <button disabled={cartitems.length == 0 ? "disabled" : ""} type="button" className="btn btn-primary btn-lg btn-block checkout" onClick={() => handleCheckout()}>Check out</button> */}
          {
              carts.length == 0 ? <button disabled="disabled" type="button" className="btn btn-primary btn-lg btn-block checkout">Your cart is empty</button> : <StripeCheckout
                  stripeKey={publishableKey}
                  image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  label="Pay Now"
                  name="Pay With Credit Card"
                  billingAddress
                  shippingAddress
                  amount={cartTotal.cartTotalAmount+10+25}
                  description={`Your total is $${cartTotal.cartTotalAmount + 10 + 25}`}
                  token={payNow}
                  
                  
                 
              >
                  <button  type="button" className="btn btn-primary btn-lg btn-block checkout">Check out</button>
              
              </StripeCheckout>
         } 
          
      </>
  )
}

export default Paybutton