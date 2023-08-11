import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Zoom, Fade, Flip, Bounce, Roll } from "react-reveal";
// import Swiper core and required modules
import { Navigation, Pagination} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: AVTR1,
    clientName: "Ernest Richest",
    clientReview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit natus reprehenderit id. Nulla sapiente nam labore commodi impedit tempore, dolorum, ex ab et corrupti eaque voluptate asperiores. Temporibus, libero quaerat?",
  },
  {
    id: 2,
    image: AVTR2,
    clientName: "Ernest Richest",
    clientReview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit natus reprehenderit id. Nulla sapiente nam labore commodi impedit tempore, dolorum, ex ab et corrupti eaque voluptate asperiores. Temporibus, libero quaerat?",
  },
  {
    id: 3,
    image: AVTR3,
    clientName: "Ernest Richest",
    clientReview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit natus reprehenderit id. Nulla sapiente nam labore commodi impedit tempore, dolorum, ex ab et corrupti eaque voluptate asperiores. Temporibus, libero quaerat?",
  },
  {
    id: 4,
    image: AVTR4,
    clientName: "Ernest Richest",
    clientReview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit natus reprehenderit id. Nulla sapiente nam labore commodi impedit tempore, dolorum, ex ab et corrupti eaque voluptate asperiores. Temporibus, libero quaerat?",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <Bounce top duration={1800}>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      </Bounce>
      <Zoom bottom duration={1800}>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
>
        {data.map(({ id, image, clientName, clientReview }) => {
          return (
            <SwiperSlide
              key={id}
              className="testimonial"
              
            >
              <div className="client__avatar">
                <img src={image} alt="" />
              </div>
              <h5 className="client__name">{clientName}</h5>
              <small className="client__review">{clientReview}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </Zoom>
      
    </section>
  );
};

export default Testimonials;
