import React from 'react';
import Project from "../Project"

function Portfolio() {
  return (
    <section id="projects" className="text-gray-400 bg-slate-800 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I love designing and developing applications that improve people's lives,
            either by making their lives easier, happier, or more exciting. View my most recent projects here:
          </p>
        </div>
        <div className="flex flex-wrap mx-auto">
          <Project />
        </div>
      </div>
    </section>
  )
}

export default Portfolio;