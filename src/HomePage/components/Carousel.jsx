import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import carousel1 from '../../assets/carousel1.png';
import carousel2 from '../../assets/carousel2.png';
import carousel3 from '../../assets/carousel3.png';
import carousel4 from '../../assets/carousel4.png';

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper-carousel"
      >
        <SwiperSlide>
          <img src={carousel1} alt="Loading..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="Loading..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel3} alt="Loading..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel4} alt="Loading..." />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
