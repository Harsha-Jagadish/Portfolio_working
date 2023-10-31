"use client";

import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import Link from "next/link";




type Props = {
    socials: Social[];
}

const isBrowser = typeof window !== "undefined";

export default function Header({socials}: Props) {
    //const {socials} = useFetchProps();
    console.log('Socials:', {socials});
  return (
    <header className="sticky top-0 p-5 flex flex-row items-start justify-between max-w-7xl mx-auto">
        <motion.div 
        initial ={{
            x:-500,
            opacity: 0,
            scale: 0.5,
        }}
        animate ={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition ={{
            duration: 1.5,
        }}
        className="flex flex-row">
            {/*Social Icons*/}

            {socials && socials.map((social)=> (

                <SocialIcon
                    key={social._id}
                    url={social.url} 
                    fgColor="gray"
                    bgColor="transparent"
                    />

            ))}
        </motion.div>

        <div onClick={() => window.location.href = '#contact'} className="cursor-pointer">
        <motion.div 
        initial ={{
            x:+500,
            opacity: 0,
            scale: 0.5,
        }}
        animate ={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition ={{
            duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 ">
            <SocialIcon url="www.outlook.com"
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray400 "> Get In Touch</p>
                
        </motion.div>
        </div>

    </header>
  );
}