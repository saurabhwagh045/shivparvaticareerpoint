import React, { useRef } from 'react'
import './Testimonials.css'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=> {
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Divya Aware</h3>
                            <span>TechVibes, Pune</span>
                        </div>
                    </div>
                    <p>
                    TechVibes in Pune is the perfect platform for anyone aspiring to enter the IT industry.
                     I completed the .NET Fullstack course, and the knowledge I gained under Mr. Pranso Mishra Sir's guidance was invaluable.
                      The institute’s focus on real-world projects and interview preparation ensured I was industry-ready.
                     The placement support was fantastic, and I am now happily employed in the tech field. Thank you, TechVibes, for helping me achieve my goals!".
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Saurabh Wagh</h3>
                            <span>TechVibes, Pune</span>
                        </div>
                    </div>
                    <p>
                    I had an excellent experience at TechVibes in Pune! The training sessions led by Mr. Pranso Mishra Sir were thorough and highly interactive.
                     The Java Fullstack course provided me with a solid understanding of both frontend and backend development, which helped me secure a placement in a top IT company.
                     I highly recommend TechVibes to anyone looking to build a career in the IT industry with hands-on training and assured placement opportunities!
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Vaishali Kadam</h3>
                            <span>TechVibes, Pune</span>
                        </div>
                    </div>
                    <p>
                    TechVibes has been a game-changer for my career. The Application Support and Production Support training was comprehensive,
                     and Mr. Pranso Mishra Sir explained the concepts in a way that was easy to understand, even for beginners.
                     The placement assistance provided by the institute was exceptional, connecting me with opportunities that matched my skills.
                      I recommend TechVibes to anyone serious about making a mark in the IT industry.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Pratik Patil</h3>
                            <span>TechVibes, Pune</span>
                        </div>
                    </div>
                    <p>
                    Joining TechVibes in Pune was one of the best decisions I’ve made for my career.
                     I opted for the Testing course, and Mr. Pranso Mishra Sir ensured the sessions were detailed, practical, and job-oriented. The institute’s strong industry connections and dedication to placements helped me secure a role in a reputed IT company.
                     If you’re looking for quality training with placement assurance, TechVibes is the place to be!.
                    </p>
                </div>
            </li>
        </ul>
     </div>
    </div>
  )
}

export default Testimonials
