import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT VIBESTECH INSTITUTE</h3>
        <h2>Nurturing Tommorrow's Leaders Today</h2>
        <p>Embark on a transformative journey into the world of IT and software development with our institute's comprehensive training programs. 
          Our industry-aligned curriculum is designed to equip students with cutting-edge technical skills, problem-solving abilities, 
          and practical experience essential for thriving in the fast-paced tech industry.
        </p>
        <p>With a focus on real-world projects, hands-on training, and personalized mentorship from experienced instructors,
           our programs empower aspiring IT professionals to excel in diverse domains such as software development, testing, application support, and production support.
           Students gain the confidence and expertise needed to tackle industry challenges and contribute meaningfully to innovative tech solutions.
        </p>
        <p>
        Whether you aim to become a software developer, full-stack engineer, IT support specialist, or quality assurance expert, our institute provides the ideal pathway 
        to achieve your career aspirations. With strong placement support, tailored guidance, and a commitment to excellence, we help students unlock their potential and 
        secure rewarding opportunities in the dynamic world of IT.
        </p>
      </div>
    </div>
  )
}

export default About
