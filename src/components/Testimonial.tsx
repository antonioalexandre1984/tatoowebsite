import { testimonialData } from "../data";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
//import styles
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import motion
import { motion } from "framer-motion";
// import fade in
import { fadeIn } from "../variants";


export function Testimonial() {
  return (
    <motion.section
      variants={fadeIn('up')}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className=" py-[40px] lg:pb-[160px] lg:pt-0">
      <div className="container mx-auto">
        <Swiper>
          {/* Swiper slides */}
          {testimonialData.map((slide, i) => {
            const { quoteImg, message, name, occupation } = slide;
            return (
              <SwiperSlide className="" key={i}>
                <div className="max-w-[1200px]  mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                  {/* quote image */}
                  <div className="w-[154px] h-[109px] mb-5">
                    <img src={quoteImg} alt="" className="" />
                  </div>
                  {/* message,name & occupation */}
                  <div className="flex-1 lg:mt-[54px]">
                    {/* message */}
                    <div className="text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12">{message}</div>
                    <div className="flex items-center  text-xl lg:text-2xl font-primary">
                      {/* name */}
                      <div className="font-semibold">{name}</div>
                      {/* occupation */}
                      <div className="font-light">{occupation}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
}