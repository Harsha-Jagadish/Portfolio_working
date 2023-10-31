"use client";

import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "./Image";
import { PageInfo } from "../typings";
import { urlFor } from '../sanity/sanity';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



type Props = {
    pageInfo: PageInfo;
}

const isBrowser = typeof window !== "undefined";

export default function Hero({pageInfo}: Props) {
    //const { pageInfo} = useFetchProps();
    const [text, count] = useTypewriter ({
        words: ["Hi, my name is Harsha", "Developer", "Project Associate", "Analyst"],
        loop: true,
        delaySpeed: 2000,
    })
    //console.log(pageInfo?.heroImage);
  return (
    <Router>
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        {pageInfo?.heroImage && (
        <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}    
        //src="/1627366534091.jpeg" 
        />
        )}
        <div className="z-20"> 
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]"> {pageInfo?.role}  </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="orange"/>
        </h1>
        <div className="pt-5">
            <a href="#about">
                <button className="heroButton">About</button>
            </a>

            <a href="#experience">
                <button className="heroButton">Experience</button>
            </a>

            <a href="#skills">
                <button className="heroButton">Skills</button>
            </a>

            <a href="#projects">
                <button className="heroButton">Projects</button> 
            </a>

        </div>
        </div>
    </div>
    </Router>
  )
}