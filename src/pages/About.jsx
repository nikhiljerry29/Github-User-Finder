import React from "react";

function About() {
   return (
      <>
         <h1 className='text-6xl mb-4'>
            Github
            <span className='text-yellow-500'>Finder</span>
         </h1>
         <p className='mb-4 text-2xl font-light'>
            A React app to search GitHub profiles and see profile details. This
            project is part of the{" "}
            <a
               href='https://www.udemy.com/course/modern-react-front-to-back/'
               className='underline decoration-yellow-500 text-white hover:text-gray-200'
               target='__blank'
            >
               React Front To Back
            </a>{" "}
            Udemy course by
            <strong>
               <a href='https://traversymedia.com' target='__blank'>
                  {" "}
                  Brad Traversy
               </a>
            </strong>
            .
         </p>
         <p className='text-lg text-gray-400'>
            Version <span className='text-white'>1.0.0</span>
         </p>
         <p className='text-lg text-gray-400'>
            Layout By:{" "}
            <a
               className='text-white'
               href='https://twitter.com/hassibmoddasser'
               target='__blank'
            >
               Hassib Moddasser
            </a>
         </p>
      </>
   );
}

export default About;
