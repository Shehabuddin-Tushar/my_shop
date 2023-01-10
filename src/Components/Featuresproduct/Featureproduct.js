import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addtocart} from '../../features/cartSlice'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Featureproduct() {

    const products = useSelector(state => state.products.items)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const productadd = (product) => {
        dispatch(addtocart(product))
        navigate("/cart")
    }
    
  return (
      <section class="shop" id="shop">
          <h1 class="heading">Featured products</h1>

          <div class="swiper product-slider">
              <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  grabCursor={true}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"

                  breakpoints={{
                      0: {
                          slidesPerView: 1
                      },
                      640: {
                          slidesPerView: 2,

                      },
                      768: {
                          slidesPerView: 3,

                      },
                      1024: {
                          slidesPerView: 4,

                      }
                  }}
              >
                  {
                      products.map((product) => {
                          return (
                              <SwiperSlide className="slide">
                                  <div class="image">
                                      <img src={product.image} />
                                      <div class="icons">
                                          <button class="fas fa-shopping-cart" onClick={()=>productadd(product)}></button>
                                          <button  class="fas fa-eye"></button>

                                      </div>
                                  </div>

                                  <div class="content">
                                      <h3>{product.name}</h3>
                                      <div class="price">${product.price }</div>
                                      <div class="stars">
                                          
                                          {
                                              [...Array(product.ratings).keys()]
                                                  .map(() => {
                                                      return <i class="fas fa-star"></i>
                                                  })
                                          }
                                       
                                          {/* <i class="fas fa-star-half-alt"></i> */}
                                      </div>
                                  </div>
                              </SwiperSlide> 
                          )
                      })
                  }
                  

                  
              </Swiper>
              
          </div>
      </section>
  )
}

export default Featureproduct