"use client";

import React, { useEffect } from 'react'
import {motion} from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity/sanity';



type Props = {
    experience: Experience
}

const isBrowser = typeof window !== "undefined";

function ExperienceCard({experience}: Props) {
    console.log("Experience Data:", experience);
    
  return (
    <article className="flex  rounded-md items-center space-y-7 flex-shrink-0 w-[500px] md:w-[800px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        
        {experience?.companyImage && (
        <motion.img
             initial={{y:-100, opacity: 0,}}
             transition={{duration: 1.2}}
             whileInView={{opacity: 1, y:0}}
             

            className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
            //src="/SAP-logo-1024x1024.jpg"
            alt=""
        />
        )}
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
            <p className="font-bold text-2xl mt-1">{experience?.company}</p>
            
            {experience.technologies?.map && (
            <div className="flex space-x-2 my-2">
                
                {experience.technologies.map((technology)=>(
                    
                    technology && technology.image ? (
                    <img
                        key={technology._id}
                        className="h-10 w-10 rounded-full"
                        src={urlFor(technology.image).url()}
                    />
                    ): null
                ))}
                
            </div>
            )}

            <p className="uppercase py-5 text-gray-300">
                {new Date(experience.dateStarted).toDateString()} -{" "} {new Date(experience.dateEnded).toDateString()}
            </p>

            {experience.points && (
            <ul className="list-disc space-y-4 ml-5 text-lg h-75 ">
                {experience.points.map((point, i) =>(
                    <li key={i}>{point}</li>
                ))}
            </ul>
            )}
        </div>

    </article>
  )
}

export default ExperienceCard