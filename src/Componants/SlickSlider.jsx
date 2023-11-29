import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlickSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='Slider_container'>
        <Slider className='Slider_container_main' {...settings}>
            <div className='Slider_container_main_box p-5'>
                <p className='Slider_container_main_box_text'> “Top notch!! Super nice, super polite, super helpful. Everyone in there was just really pleasant. Great team!” </p>
                <h1 className='Slider_container_main_box_author'> – Dave S. </h1>
            </div>

            <div className='Slider_container_main_box'>
                <p className='Slider_container_main_box_text'> “LG gave me a sense of security and a confidence to know that I would have work, no matter what.” </p>
                <h1 className='Slider_container_main_box_author'> – Joseph B. </h1>
            </div>

            <div className='Slider_container_main_box p-5'>
                <p className='Slider_container_main_box_text overflow-x-hidden'> “I’ve been with Lg Resources for five years now and they’ve been very supportive of me and my family's needs. Lg has been my main source of income and I couldn’t ask for a better company to learn and grow with! Working at LG has helped me learn so many things that I can apply to my daily life. It has helped me with my interacting skills and everyday I learn something new! I love that my job allows me to help change someone's life for the better. Seeing people grow and really find their purpose in life helps me stay motivated and committed to what Lg has to offer.” </p>
                <h1 className='Slider_container_main_box_author'> – Dai </h1>
            </div>

            <div className='Slider_container_main_box'>
                <p className='Slider_container_main_box_text'> “I have been with LG for 5 years and the opportunities for growth are here. You are tested every day on how badly you want success. LG and all the people here have helped me build myself and my performance. The diversity that we see every day makes us relate to people and makes our work environment stronger.” </p>
                <h1 className='Slider_container_main_box_author'> – Lupe </h1>
            </div>

            <div className='Slider_container_main_box'>
                <p className='Slider_container_main_box_text'> “I am very grateful to LG for the opportunity it gave me. A former LG worker saw potential in me when I was working in a warehouse and offered me the opportunity to interview to work with LG as a recruiter. I started working and a few months later I was promoted to manager. I had no experience but LG helped me and gave me the necessary resources to improve my skills and grow as a person in my professional field.” </p>
                <h1 className='Slider_container_main_box_author'> – Yizalie </h1>
            </div>

            <div className='Slider_container_main_box'>
                <p className='Slider_container_main_box_text'> “LG has improved my life drastically in the last 3 years. I started out as a temp through the agency and eventually got offered to come work in the office as a recruiter. Now I'm managing the office. The opportunity in the company is huge for whoever wants it. Working for LG has helped me improve my personal and my professional life.” </p>
                <h1 className='Slider_container_main_box_author'> – Brendan </h1>
            </div>

            <div className='Slider_container_main_box'>
                <p className='Slider_container_main_box_text'> “The staff at LG Resources in Camp Hill, Pennsylvania were very patient and helpful with the application process. And the first site they sent me to the Employers hired me the very next day after I toured their facility. Thanks to you all at LG.I am forever grateful for the opportunity. Anyone seeking employment, I would recommend you go to LG RESOURCES STAFFING AGENCY. THANK YOU AND GOD BLESS.” </p>
                <h1 className='Slider_container_main_box_author'> – Maynard R. </h1>
            </div>

            <div className='Slider_container_main_box'>
                <p className='Slider_container_main_box_text'> “The staff at LG resources was very helpful and friendly and Anni Guzman got me a job within 2 days and now I’m starting my new job tomorrow. Anni is very helpful when it comes to finding the right job for you and a job your gonna love going to.” </p>
                <h1 className='Slider_container_main_box_author'> – Christian R. </h1>
            </div>
        </Slider>
    </div>
  )
}

export default SlickSlider
