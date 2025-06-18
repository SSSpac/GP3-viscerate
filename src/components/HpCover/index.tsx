'use client'

import React from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function HpCover() {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div className='fixed flex justify-center items-center top-[-100vh] h-[100vh] w-full bg-foreground z-70'
        initial={{
          y: "0",
        }}
        animate={{
          y: "100vh"
        }}
        transition={{
          duration: 0.5,
          ease: 'backOut',
          times: [0, 0.25, 0.5, 0.85, 1]
        }}
      >
        <motion.button className='w-100 h-100'>
          <img className='w-full h-full' src="./icons/logo_2.png" alt="" />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}
