"use client";

import React from 'react'
import {motion} from "framer-motion"
import { Skill } from '../typings';
import { urlFor } from '../sanity/sanity';



type Props = {
    skill: Skill;
}

const isBrowser = typeof window !== "undefined";


function Skill({skill}: Props) {
    
  return (
    <div className="group relative flex cursor-pointer">
        
        {skill?.image && (
        <motion.img 

            initial={{
                opacity: 0,
            }}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x:0}}
            
            src={urlFor(skill?.image).url()}
            //src="/C++.jpeg"
            
            className=" border-gray-500  object-cover w-100 h-100 md:h-100 md:w-100 xl:w-70 xl:h-100 filter group-hover:grayscale transition duration-300 ease-in-out" 

        />
        )}

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">{skill?.progress}%</p>
            </div>
        </div>



    </div>
  )
}

export default Skill