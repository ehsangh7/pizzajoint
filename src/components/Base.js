import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transiton: {
      delay: 0.5,
      type: 'spring'
    },
    exit: {
        x: '-100vw',
        transition: {
          ease: "easeInOut"
        }
  
        
    }
  },
 
}

const childVariants = {
  hidden: {
    opacity:0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring', 
      stiffness: 120
    }
  },
  hover: {
    
    scale: 1.3, 
    originX: 0, 
    color: 'yellow', 
    textShadow: '0 0 50px rgba(0, 0, 0, 0.2)', 
    
  }
}

const buttonContainer = {
  hidden:{
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { 
      delay: 0.5 , 
      duration: 3 , 
      type: "spring", 
      stiffness: 120 },
  },
  hover: { 
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
  
  
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
     variants={containerVariants}
     initial="hidden"
     animate="visible"
     
     exit= "exit"
     className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
             variants={childVariants}
             whileHover= "hover"
             
             key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={buttonContainer}
          initial="hidden"
          animate="visible"
          
         
        className="next">
          <Link to="/toppings">
            <motion.button
             variants={buttonContainer}
             whileHover= "hover"
             >
            Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;