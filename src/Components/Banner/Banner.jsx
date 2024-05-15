import banner from "../../assets/banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slider from "../Slider/Slider";
const Banner = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider
            image="https://i.postimg.cc/Y0Ktxbg3/Default-job-searcing-3.jpg"
            text="Welcome to JobQuest, your premier destination for finding the job that fits you best."
          ></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            image="https://i.postimg.cc/qvNLHLW0/Default-job-searcing-2.jpg"
            text="Explore a world of opportunities and take the next step in your career with JobQuest"
          ></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            image="https://i.postimg.cc/QCkXt1Pd/Default-job-searcing-0.jpg"
            text="Browse, apply, succeed. Your job search made simple"
          ></Slider>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
