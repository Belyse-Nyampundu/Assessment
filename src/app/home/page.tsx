'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import Image from "next/image";

const Home = ()=> {


return (
    <div className="bg-white ">
        <div className='flex flex-wrap justify-between'>

       
        <div className="w-full md:w-1/2 md:pr-4 ">
            <h2>Course overview</h2>
            <Image
               src="/images/mountain.jpeg"
                alt="Signup Image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                >
            </Image>
        </div>
      
            <h2>Course overview</h2>
            <h5>About the course</h5>
            <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum</p>
           <li>Ipsum sit mattis nulla quam nulla. Gravida id gravida </li>
           <li>Non pellentesque congue eget consectetur turpis.</li>
           <li>Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.</li>
      

        <h4>Duration</h4>
        <p>3 weeks</p>

        <h4>Resources</h4>
        <p>Introduction to product design</p>
        </div>
        <div className=''>
            <div>
                <p>3332232</p>

                <p>Course duration <span>4 weeks</span></p>
                <p>Course level <span> Beginner</span></p>
                <p>Student enrolled <span>43</span></p>

                <button
                type="submit"
                className=" border border-[#6b44c7] w-full md:w-[400px] h-[55px] bg-teal-600 bg-[#27779b] text-white rounded-xl py-2 text-lg md:text-xl lg:text-2xl mt-4"
              >
                Edit price
              </button>

              <p>Course duration <span>4 weeks</span></p>
                <p>Course level <span> Beginner</span></p>
                <p>Student enrolled <span>43</span></p>
            </div>
        </div>

    </div>

)
}
export default Home;