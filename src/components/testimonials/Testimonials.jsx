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
    clientName: "Erica willson",
    clientReview:
      "From the initial consultation to the final delivery, this Laravel developer displayed professionalism, skill, and dedication. They were able to understand our vision and transform it into a fully functional web application that meets our business needs. The after-service support has been exceptional, ensuring that our system runs smoothly. Highly recommended for any web development project.",
  },
  {
    id: 2,
    image: AVTR2,
    clientName: "John William",
    clientReview:
      "This Laravel developer has a great eye for detail and a deep knowledge of web development. The project was challenging, but they navigated through the complexities with ease and delivered a robust, scalable application. Their commitment to quality and customer satisfaction is commendable, making them a valuable asset to any team.",
  },
  {
    id: 3,
    image: AVTR3,
    clientName: "Fawad Ahmad",
    clientReview:
      "Working with this Laravel developer was a great experience. They demonstrated deep expertise and professionalism, delivering a high-quality solution that exceeded our expectations. The project was completed on time, and the communication throughout the process was excellent. I highly recommend their services for any web development needs.",
  },
  {
    id: 4,
    image: AVTR4,
    clientName: "Shiza Riaz",
    clientReview:
      "The developer showed a strong understanding of our requirements and delivered a seamless and efficient Laravel application. They were responsive to our feedback and provided valuable insights that improved the overall outcome. We are extremely satisfied with the results and look forward to collaborating on future projects.",
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
