'use client'

import React from 'react'
import { motion } from 'motion/react'

export default function HpCover() {
  return (
    <div className='fixed flex justify-center items-center top-0 bottom-0 w-full bg-foreground z-70'>
        <motion.button className='w-100 h-100'>
            <img className='w-full h-full'  src="./icons/logo_2.png" alt="" />
        </motion.button>
    </div>
  )
}
