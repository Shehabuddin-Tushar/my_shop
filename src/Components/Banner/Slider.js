import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,FreeMode,Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function Slider() {
  return (
     <section class="home" id="home">
          
          <div class="swiper home-slider">
              
              <Swiper
                  grabCursor={true}
                  navigation={true}
                  autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                  }}
                  modules={[Autoplay,Navigation]}
                  className="mySwiper"
                 >
                  <SwiperSlide>
                      <div class="box" style={{background:`url("assets/image/imageslider1.png") no-repeat`}}>
                          <div class="content">
                              <span>Move forward</span>
                              <h3>exploring</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsum explicabo, voluptatibus dolorum nam ea dicta impedit voluptates veritatis sint quo molestiae aspernatur fugit ex excepturi, suscipit neque reprehenderit laboriosam.</p>
                              <a href="" class="btn">get started</a>
                          </div>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div class="box second" style={{ background: `url("/assets/image/imageslider2.png") no-repeat` }}>
                          <div class="content">
                              <span>Your ambition</span>
                              <h3>exploring</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsum explicabo, voluptatibus dolorum nam ea dicta impedit voluptates veritatis sint quo molestiae aspernatur fugit ex excepturi, suscipit neque reprehenderit laboriosam.</p>
                              <a href="" class="btn">get started</a>
                          </div>
                      </div>
                    </SwiperSlide>

                  <SwiperSlide>
                      <div class="box" style={{ background: `url("/assets/image/imageslider2.jpg") no-repeat` }}>
                          <div class="content">
                              <span>Never stop</span>
                              <h3>exploring</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsum explicabo, voluptatibus dolorum nam ea dicta impedit voluptates veritatis sint quo molestiae aspernatur fugit ex excepturi, suscipit neque reprehenderit laboriosam.</p>
                              <a href="" class="btn">get started</a>
                          </div>
                      </div>
                </SwiperSlide>


              </Swiper>
             
              
          </div>
      </section>
  )
}

export default Slider