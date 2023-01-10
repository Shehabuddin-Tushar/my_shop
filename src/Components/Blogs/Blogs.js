import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Blogs() {
  return (
      <section class="blogs" id="blogs">

          <h1 class="heading"> our daily posts </h1>

          <div class="swiper blogs-slider">

              <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  grabCursor={true}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"

                  breakpoints={{
                      0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        991: {
                            slidesPerView: 3,
                        },

                        1024: {
                            slidesPerView: 4,

                        }
                  }}
              >

                  <SwiperSlide className="slide">
                      <img src="assets/image/img-1.jpg" alt=""/>
                          <div class="icons">
                              <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                              <a href="#"> <i class="fas fa-user"></i> by admin </a>
                          </div>
                          <h3>blog title goes here.</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                          <a href="#" class="btn">read more</a>
                  </SwiperSlide>

                  <SwiperSlide className="slide">
                      <img src="assets/image/img-2.jpg" alt=""/>
                          <div class="icons">
                              <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                              <a href="#"> <i class="fas fa-user"></i> by admin </a>
                          </div>
                          <h3>blog title goes here.</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                          <a href="#" class="btn">read more</a>
                  </SwiperSlide>

                  <SwiperSlide className="slide">
                      <img src="assets/image/img-3.jpg" alt=""/>
                          <div class="icons">
                              <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                              <a href="#"> <i class="fas fa-user"></i> by admin </a>
                          </div>
                          <h3>blog title goes here.</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                          <a href="#" class="btn">read more</a>
                  </SwiperSlide>

                  <SwiperSlide className="slide">
                      <img src="assets/image/img-4.jpg" alt=""/>
                          <div class="icons">
                              <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                              <a href="#"> <i class="fas fa-user"></i> by admin </a>
                          </div>
                          <h3>blog title goes here.</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                          <a href="#" class="btn">read more</a>
                  </SwiperSlide>

                  <SwiperSlide className="slide">
                      <img src="assets/image/img-5.jpg" alt=""/>
                          <div class="icons">
                              <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                              <a href="#"> <i class="fas fa-user"></i> by admin </a>
                          </div>
                          <h3>blog title goes here.</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                          <a href="#" class="btn">read more</a>
                  </SwiperSlide>

                  <SwiperSlide className="slide">
                      <img src="assets/image/img-6.jpg" alt=""/>
                          <div class="icons">
                              <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                              <a href="#"> <i class="fas fa-user"></i> by admin </a>
                          </div>
                          <h3>blog title goes here.</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                          <a href="#" class="btn">read more</a>
                  </SwiperSlide>

              </Swiper>

              


          </div>

      </section>
  )
}

export default Blogs