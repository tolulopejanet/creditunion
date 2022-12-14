import { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";

export default () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth <= 425) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={15}
      slidesPerView={isMobile ? 1 : 4}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="reviews">
          <span>Adeola</span>
          <h6 className="container">Lorem ipsum dolor sit amet.</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="reviews">
          <span>Adeola</span>
          <h6 className="container">Lorem ipsum dolor sit amet.</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="reviews">
          <span>Adeola</span>
          <h6 className="container">Lorem ipsum dolor sit amet.</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="reviews">
          <span>Adeola</span>
          <h6 className="container">Lorem ipsum dolor sit amet.</h6>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
