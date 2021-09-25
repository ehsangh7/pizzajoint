import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      yoyo: Infinity,
    }
  }
}

const containerVariants = {
  hidden: {
    y:-300, 
    opacity: 0 
  },
  visible: {
    y: 50, 
    opacity: 1 ,
    transition: {
      delay: 1.5, 
      duration: 0.5,
    },
  },
  exit: {
      x: '-100vw',
      transition: {
        ease: "easeInOut"
      }

      
  }

}


const Home = () => {
  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit= "exit"
    className="home container">
      
      <h2>Welcome to Pizza Joint</h2>

      <Link to="/base">
        <motion.button
         variants={buttonVariants}
        
         whileHover="hover"
        >Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;