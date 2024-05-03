import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.5
        }
    }


  return (
      <>
        <div className="contact" id='contact'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className="heading-sub-text"></p>
                    <p className='heading-text'>THANK YOU</p>
                </motion.div>
                <div className="contact-box">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading">
                            <p></p>
                        </div>
                        <div className="contact-hello">
                            <p>Say Hello</p>
                            <Link className='hello-links' to="" target='_blank'></Link>
                            <a className='hello-links' href="mailto:shreejithshreejith45@gmail.com" target='_blank' rel="noreferrer">shreejithshreejith45@gmail.com</a>
                            <a className='hello-links' href="mailto:https://github.com/kshreejith" target='_blank' rel="noreferrer">https://github.com/kshreejith</a>
                            <a className='hello-links' href="mailto:https://www.linkedin.com/in/kshreejith/" target='_blank' rel="noreferrer">https://www.linkedin.com/in/kshreejith//</a>
                        </div>
                    </motion.div>
                    <motion.div className="right-box" initial={{opacity: 0, y: '50px'}} whileInView={verticalLeft}>
                    
                        
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
