"use client";

import React from 'react'
import {motion} from "framer-motion"
import { Project } from '../typings';
import { urlFor } from '../sanity/sanity';


type Props = {
    projects: Project[];
}

const isBrowser = typeof window !== "undefined";

function Projects({projects}: Props) {

    //const { projects} = useFetchProps();
  
  return (
    <motion.div 
    
    className="h-screen relative text-center flex overflow-hidden flex-col max-w-full jusitfy-evenly mx-auto items-center z-0 ">
       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> 
        Projects
        </h3>

        {projects?.map && (
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {projects?.map((project, i) => (
                <div 
                    key={project?._id} 
                    className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 "
                    >
                    
                    {project.image && (
                    <motion.img
                        initial={{y: -300, opacity: 0}}
                        transition={{duration: 1.2}}
                        whileInView={{opacity: 1, y:0}}
                        
                        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover "
                        src={urlFor(project?.image).url()}
                        //src="/DDclone.png"
                        alt=""
                    />
                    )}
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            {project?.title}
                        </h4>

                        <div className='flex items-center space-x-2 justify-center'>
                        {project?.technologies.map((technology) =>(
                            technology && technology.image ? (
                            <img 
                                className='h-10 w-10 rounded-full'
                                key={technology._id}
                                src={urlFor(technology.image).url()}
                                alt=" "
                            />
                            ) : null
                        ))}
                        </div>

                        <p className="text-lg text-center md:text-left">
                            {project?.summary}
                        </p>
                        

                        <h5 className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg ">
                            Build:{" "}
                            <a href={project?.linkToBuild} target="_blank" rel="noopener noreferrer">
                                    GitHub Link
                            </a>
                        </h5>


                    </div>    
                </div>
            ))}
        </div>
        )}

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12">

        </div>

    </motion.div>
  )
}

export default Projects