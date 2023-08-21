import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/amilars/',
      name: 'Amil Rustemli',
      role: 'Leading Specialist | IT Business Analytics | Business & Data Analytics, MBA',
      test: "I had the privilege of collaborating with Jamal and it's evident that he's a dedicated frontend developer with a passion for growth. Jamal consistently goes above and beyond to deliver user-friendly and visually appealing interfaces. His enthusiasm for learning and adapting to new technologies is truly commendable. I've been impressed by Jamal's proactive approach to problem-solving and his willingness to take on challenges. With his positive attitude and strong work ethic, I have no doubt that Jamal will continue to make significant contributions as a frontend developer. I wholeheartedly endorse Jamal and his aspirations for continuous development.",
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/elvincabbarli/',
      name: 'Elvin Cabbarli',
      role: 'Front-End Web Developer (React Js&Next Js)',
      test: "I am thrilled to recommend Camal for any front-end development opportunities that may be available. I have had the pleasure of working alongside Camal as a front-end developer at Buta Tech, and I am confident in their exceptional abilities and contributions. Camal is a proficient front-end developer with a deep understanding of HTML, CSS, JavaScript, and various frameworks. Their work consistently showcases an eye for detail and a commitment to creating visually pleasing and user-friendly interfaces. What truly stands out is Camal's eagerness to stay current with industry trends and best practices, ensuring that their work is always cutting-edge.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/raul-omarov-7841b7201/',
      name: 'Raul Omarov',
      role: 'Frontend Developer (React.js)',
      test: "I had the privilege of collaborating with Jamal and it's evident that he's a dedicated frontend developer with a passion for growth. Jamal consistently goes above and beyond to deliver user-friendly and visually appealing interfaces. His enthusiasm for learning and adapting to new technologies is truly commendable. I've been impressed by Jamal's proactive approach to problem-solving and his willingness to take on challenges. With his positive attitude and strong work ethic, I have no doubt that Jamal will continue to make significant contributions as a frontend developer.",
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/sema-abdullayeva/',
      name: 'Sema Abdullayeva',
      role: 'Front End Developer',
      test: "I am thrilled to offer my strong recommendation for Jamal as an exceptional Front-End Developer. Jamal consistently demonstrates a deep understanding of web development technologies and has the ability to craft visually engaging and user-centered interfaces. Their steadfast dedication to delivering high-quality work, collaborative nature, and creative problem-solving skills make them an invaluable asset to any project. Jamal's positive attitude, attention to detail, and unwavering commitment to achieving results distinguish them as a standout member of our development team. I have complete confidence that their outstanding performance and significant contributions will continue to shine in any front-end development role.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/shahmal1yev/',
      name: 'Eldar Shahmaliyev',
      role: 'PHP Developer',
      test: "Although we have known each other for a very short time, I have seen that your skills, experience, and determination are truly commendable both in our work and in the other projects we have collaborated on. I am confident that you will achieve the ambitious goals you have set in every area you progress. I wish your path to always be open.",
    },
    {
      id: 6,
      link: 'https://www.linkedin.com/in/l%C9%99manr%C9%99zzaql%C4%B1/',
      name: 'Laman Razzagli',
      role: 'Business Development Specialist',
      test: "I am pleased to recommend Jamal as an exceptional Front-End Developer. Jamal consistently demonstrates a deep understanding of web development technologies and an ability to create visually appealing and user-friendly interfaces. Their dedication to quality, teamwork, and innovative problem-solving make them a valuable asset to any project. Jamal's positive attitude, attention to detail, and commitment to delivering results make them a standout contributor to our development team. I have no doubt that they will continue to excel and contribute effectively in any front-end development role.",
    },
    {
      id: 7,
      link: 'https://www.linkedin.com/in/docspacex/',
      name: 'Elshad Jabrayilzade',
      role: 'Multifaceted Graphic Designer',
      test: "Jamal is working with 3 companies at the same time. Actually the reason is he is very capable, great team leader and he knows many sides of work like Programming, PM manager etc. I recommend you guys to work with Jamal and you don't regret your decision.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials