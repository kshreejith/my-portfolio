import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I did</p>
                    <p className='heading-text'>Projects</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Project 1</p>
                        <p className='services-title'>Chatbot for mining industry</p>
                        <p className='services-desc'>Chatbot to respond to text queries pertaining to various Acts, Rules, and Regulations applicable to Mining industries
 </p>
                    </div>
                    <div className="services-card">
                        <IoColorWandOutline className='services-icon' />
                        <p className='services-title'>Project 2</p>
                        <p className='services-title'>Portfolio website</p>
                        <p className='services-desc'>Implemented CI/CD pipeline to automate deployment of portfolio website to S3 bucket, then containerized using Docker and orchestrated with Kubernetes for scalable and efficient hosting.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
