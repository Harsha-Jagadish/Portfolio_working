"use client";

import React from 'react'
import {motion} from "framer-motion"
import { Skill } from '../typings';
import { urlFor } from '../sanity/sanity';



type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

const isBrowser = typeof window !== "undefined";


function Skill({skill, directionLeft}: Props) {
    
  return (
    <div className="rounded-full group relative flex cursor-pointer w-24 h-24  xl:w-[50px] xl:h-[50px] object-cover object-center">
        
        {skill?.image && (
        <motion.img 

            initial={{
                x: directionLeft ? -400: 400,
                opacity: 0,
            }}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x:0}}
            
            src={urlFor(skill?.image).url()}
            //src="/C++.jpeg"
            
            className="rounded-full group relative flex cursor-pointer w-24 h-24  md:w-[200px] md:h-[200px] xl:w-[50px] xl:h-[50px] object-cover object-center border-gray-500  object-cover w-200 h-200 md:200 md:w-200 xl:w-70 xl:h-100 filter group-hover:grayscale transition duration-300 ease-in-out" 

        />
        )}

        <div className="absolute  opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-l font-bold text-black opacity-100">{skill?.title}{": "}{skill?.progress}%</p>
            </div>
        </div>



    </div>
  )
}

export default Skill