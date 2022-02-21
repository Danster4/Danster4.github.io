import React from 'react';
import github from '../../assets/images/logos/icons8-github.svg'
import internet from '../../assets/images/logos/icons8-internet.png'
import elevenPhoto from '../../assets/images/portfolio-photos/screencapture-eleven-eleven.png'
import claPhoto from '../../assets/images/portfolio-photos/screencapture-cla.PNG'
import superFanPhoto from '../../assets/images/portfolio-photos/screencapture-superfan.PNG'
import runBuddyPhoto from '../../assets/images/portfolio-photos/screencapture-run-buddy.PNG'
import horiseonPhoto from '../../assets/images/portfolio-photos/screencapture-horiseon.PNG'
import noteTakerPhoto from '../../assets/images/portfolio-photos/screencapture-note-taker.PNG'


function Project() {

  const projects = [
    {
      title: "Eleven:Eleven",
      subtitle: "JavaScript, Handlebars, & Express.js",
      description:
        "Created with Chris Zichko and Nick Hodges, Eleven:Eleven is a social media application for web developers looking to share and learn information.",
      image: elevenPhoto,
      link: "https://murmuring-mesa-60919.herokuapp.com/",
      github: "https://github.com/Danster4/studyapp"
    },
    {
      title: "Community Lenders Alliance",
      subtitle: "JavaScript, HTML, & CSS",
      description:
        "Designed and created CLA's website, a division of Waterman Bank that seeks to provide community banks with a competitive lending platform.",
        image: claPhoto,
        link: "https://communitylendersalliance.com",
        github: "https://github.com/Danster4/community-lenders-alliance"
    },
    {
      title: "SuperFan",
      subtitle: "JavaScript, HTML, & CSS",
      description:
        "Created with Paul Frueh, Maria Sori, and Robert Isaacs, SuperFan is a one-stop shop for fans to find tickets, information, and products.",
        image: superFanPhoto,
        link: "https://pfrueh1.github.io/SuperFan",
        github: "https://github.com/pfrueh1/SuperFan"
    },
    {
      title: "Run Buddy",
      subtitle: "HTML & CSS",
      description:
        "A Web Dev Bootcamp project that shows HTML/CSS abilities to create a responsive single-page website for a company called Run Buddy.",
        image: runBuddyPhoto,
        link: "https://danster4.github.io/run-buddy/",
        github: "https://github.com/Danster4/run-buddy"
    },
    {
      title: "Horiseon",
      subtitle: "HTML & CSS",
      description:
        "A Web Dev Bootcamp project that shows HTML/CSS abilities to create a new single-page website for a company called Horiseon.",
        image: horiseonPhoto,
        link: "https://danster4.github.io/c-1-horiseon/",
        github: "https://github.com/Danster4/c-1-horiseon"
    },
    {
      title: "Note Taker",
      subtitle: "Express.js, JavaScript, & HTML/CSS",
      description:
        "This project gives users the ability to create notes and store them for future use, all while learning about Express.js and servers.",
        image: noteTakerPhoto,
        link: "https://still-anchorage-18029.herokuapp.com/",
        github: "https://github.com/Danster4/c-11-note-taker"
    },
  ];

  return (
    <div className="flex flex-wrap -m-4">
      {projects.map((project) => (
        <a
          // href={project.link}
          key={project.image}
          className="sm:w-1/2 p-4">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={project.image}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {project.subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {project.title}
              </h1>
              <p className="leading-relaxed">{project.description}</p>
              <div className='flex justify-center w-full mt-3'>
              <a href={project.github} target="_blank" >
                <img src={github} alt="GitHub logo and link" 
                className='mx-4 mt-3'/> 
              </a>
              <a href={project.link} target="_blank">
                <img src={internet} alt="Web browser logo and link" 
                className='mx-4 mt-3'
                width="30"/> 
              </a>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
    
  )
}

export default Project;