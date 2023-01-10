import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function Clients() {
  return (
      <section class="clients">

          <div class="swiper clients-slider">
              <Swiper
                  slidesPerView={4}
                  spaceBetween={50}
                  grabCursor={true}
                  navigation={true}
                  modules={[Navigation]}
                 

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

                      1024: {
                          slidesPerView: 4,

                      }
                  }}
              >
                  <SwiperSlide className="slide"><img src="assets/image/client-logo-1.png" alt=""/></SwiperSlide>
                  <SwiperSlide className="slide"><img src="assets/image/client-logo-2.png" alt=""/></SwiperSlide>
                  <SwiperSlide className="slide"><img src="assets/image/client-logo-3.png" alt=""/></SwiperSlide>
                  <SwiperSlide className="slide"><img src="assets/image/client-logo-4.png" alt="" /></SwiperSlide>
                  <SwiperSlide className="slide"><img src="assets/image/client-logo-1.png" alt="" /></SwiperSlide>
                  <SwiperSlide className="slide"><img src="assets/image/client-logo-2.png" alt="" /></SwiperSlide>
                  <SwiperSlide className="slide"><img src="assets/image/client-logo-3.png" alt="" /></SwiperSlide>
                  <SwiperSlide className="slide"><img src="assets/image/client-logo-4.png" alt="" /></SwiperSlide>
              </Swiper>
          </div>

      </section>
  )
}

export default Clients