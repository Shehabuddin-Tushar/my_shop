import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode,Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function Reviews() {
  return (
 

<section class="reviews" id="reviews">

    <h1 class="heading">client's reviews</h1>

    <div class="swiper review-slider">

              <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  grabCursor={true}
                  
                  autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                  }}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"

                  breakpoints={{
                      0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                  }}
              >

            <SwiperSlide className="slide">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                <div class="user">
                    <img src="assets/image/pic-1.png" alt=""/>
                    <div class="info">
                        <h3>john deo</h3>
                        <span>designer</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="slide">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                <div class="user">
                    <img src="assets/image/pic-2.png" alt=""/>
                    <div class="info">
                        <h3>john deo</h3>
                        <span>designer</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="slide">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                <div class="user">
                    <img src="assets/image/pic-3.png" alt=""/>
                    <div class="info">
                        <h3>john deo</h3>
                        <span>designer</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="slide">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                <div class="user">
                    <img src="assets/image/pic-4.png" alt=""/>
                    <div class="info">
                        <h3>john deo</h3>
                        <span>designer</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="slide">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                <div class="user">
                    <img src="assets/image/pic-5.png" alt=""/>
                    <div class="info">
                        <h3>john deo</h3>
                        <span>designer</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="slide">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                <div class="user">
                    <img src="assets/image/pic-6.png" alt=""/>
                    <div class="info">
                        <h3>john deo</h3>
                        <span>designer</span>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>

        

    </div>

</section>


  )
}

export default Reviews