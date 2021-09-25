import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transiton: {
      type: 'spring',
      delay: 0.5
    }
  },
  exit: {
      x: '-100vw',
      transition: {
        ease: "easeInOut"
      }

      
  }
 
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



const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    
    className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
            variants={childVariants}
            whileHover= "hover"
  
            key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <motion.div
          variants={buttonContainer}
          initial="hidden"
          animate="visible"   
        className="next">
          <Link to="/order">
            <motion.button
              variants={buttonContainer}
              whileHover="hover"
            >
              Order
            </motion.button>
          </Link>
        </motion.div>

      

    </motion.div>
  )
}

export default Toppings;