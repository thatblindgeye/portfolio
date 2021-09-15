import React, { useEffect } from 'react';
import work from '../../work.json';

function ProjectCard({ project, projectIndex }) {
  const { name, description, images, github, demo } = project;
  return (
    <div className='project__card card elevation-01dp'>
      <div className='project__image-container'>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              className='project__image elevation-02dp'
              src={`${process.env.PUBLIC_URL}${image}`}
              alt={name}
            />
          );
        })}
      </div>
      <div className='project__title'>
        <h2 id={`project-${projectIndex}`} className='project__name'>
          {name}
        </h2>
        <div className='project__link-container'>
          <a
            id={`demo-${projectIndex}`}
            className='button-contained project__demo-link'
            aria-labelledby={`project-${projectIndex} demo-${projectIndex}`}
            href={demo}
          >
            Live Demo
          </a>
          <a
            id={`github-${projectIndex}`}
            className='button-outline project__github-link'
            aria-labelledby={`project-${projectIndex} github-${projectIndex}`}
            href={github}
          >
            GitHub Repo
          </a>
        </div>
      </div>
      <div className='project__description'>{description}</div>
    </div>
  );
}

export default function Projects() {
  const projects = work.projects;

  useEffect(() => {
    document.title = 'Projects | Eric Olkowski';
  }, []);

  return (
    <>
      <h1 className='page__header'>Projects</h1>
      <div className='projects-container'>
        {projects.map((project, index) => {
          return (
            <ProjectCard key={index} project={project} projectIndex={index} />
          );
        })}
      </div>
    </>
  );
}
