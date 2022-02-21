import React from 'react';
import logo2 from '../../assets/images/logos/turtle-svg-logo-2.svg'


function Resume() {
  return (
    <section id="resumeSection" className='bg-slate-800 flex grid'>
      
    
      <div className="bg-slate-800 grid gap-3 items-center flex place-content-center justify-center">
        <div className='flex justify-center'>
          <img src={logo2} alt="turtle logo" className='flex justify-center w-1/2'/>
        </div>
        <h1 className="items-center font-semibold text-white lg:text-5xl md:text-4xl sm:text-4xl text-3xl mt-8 mb-2 mx-3">
          Resume
        </h1>
        <br />
      </div>


      <div class="p-6 flex justify-center ">
            <a
            href="https://github.com/Danster4/c-20-react-portfolio/raw/develop/src/assets/daniel-urkov-resume.pdf"
            download={"daniel-urkov-resume.pdf"}
            target="_blank"
            id="resumeButton"
            className=" 
            py-3
            px-7
            border border-[#E5E7EB]
            rounded-full
            text-white
            font-medium
            hover:border-green-400 hover:bg-green-800 hover:text-white
            transition" 
            type="submit">
              Download
            </a>
        </div>

    <div class="flex flex-wrap -mx-px overflow-hidden xl:-mx-10">

      <div class="my-px px-px w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 xl:my-10 xl:px-10">
        <h2 className='text-white text-3xl'>
          <em>Work Experience</em>
        </h2>
        <br />
        <p className="text-white text-xl">
          <strong>Web Development Intern</strong>          
          <br /> 
          Waterman Bank
          <br />
          Oct. 2021 - Present
        </p>
        <br />
        <p className="text-white text-xl">
          <strong>Guest Services Ambassador</strong>          
          <br /> 
          Hotel Haya/Aparium
          <br />
          Jun. 2021 - Nov. 2021
        </p>
        <br /> 
        <h2 className='text-white text-3xl'>
          <em>Education</em>
        </h2>
        <br />
        <p className="text-white text-xl">
          <strong>Certificate</strong>          
          <br /> 
          University of Central Florida <br/>Coding Boot Camp
          <br />
          Aug. 2021 - Present
        </p>
        <br />
        <p className="text-white text-xl">
          <strong>Master of Arts<br />in Clinical Psychology</strong>          
          <br /> 
          National Louis University
          <br />
          Aug. 2018 - Dec. 2020
        </p>
        <br />
        <p className="text-white text-xl">
          <strong>Bachelor of Science<br />in Psychology</strong>          
          <br /> 
          University of Miami
          <br />
          Aug. 2015 - Jun. 2018
        </p>
        <br />
      </div>

      

      <div class="my-px px-px w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 xl:my-10 xl:px-10">
        <h2 className='text-white text-3xl'>
          <em>Languages</em>
        </h2>
        <br />
        <p className="text-white text-xl">
          HTML5          
          <br />
          CSS3
          <br />
          JavaScript
          <br />
          jQuery
          <br />
          JSX
          <br />
          SQL
          <br />
          GraphQL
        </p>
        <br /> 
        <h2 className='text-white text-3xl'>
          <em>UI/UX & Dev Tools</em>
        </h2>
        <p className="text-white text-xl">
          <br />
          React.js          
          <br />
          Node.js
          <br />
          Express.js
          <br />
          Handlebars.js
          <br />
          WordPress
          <br />
          GitHub
          <br />
          Insomnia
          <br />
          MySQL
          <br />
          Jest
        </p>
        <br />
        <h2 className='text-white text-3xl'>
          <em>Courses/Trainings</em>
        </h2>
        <br />
        <p className="text-white text-xl">
          <strong>Figma UI/UX Design Essentials</strong>          
          <br /> 
          udemy.com - Daniel Scott
          <br />
          Dec. 2021 - Present
        </p>
      </div>

    </div>

    
     



  

      
    </section>
  )
}

export default Resume;