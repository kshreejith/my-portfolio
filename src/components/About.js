import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile.jpeg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hi Everyone, I am SHREEJITH K from Coimbatore, Tamil Nadu, India.I am currently studying a Bachelor of Engineering in Computer Science and Engineering at Karpagam Institute of Technology.  </p>
                        <br />
                        <p> I have successfully completed certifications in Java programming through NPTEL platform and completed certifications in AWS EC2 and Cloud Computing Architecture.</p>
                        <br />
                        <p>My hobbies is to play football,cricket and reading books.I am quite good in team management and having good leadership qualities as well.  </p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
