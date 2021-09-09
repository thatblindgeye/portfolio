import React, { useEffect, useState } from 'react';
import work from '../../work.json';

function ProjectCard({ project }) {
  const { name, description, images, github, demo } = project;
  return (
    <div>
      <div>{name}</div>
      {images.map((image, index) => {
        return (
          <img
            key={index}
            className='elevation-04dp'
            src={`${process.env.PUBLIC_URL}${image}`}
            alt=''
          />
        );
      })}
      <div>{description}</div>
      <a href={github}>GitHub Repo</a>
      <a href={demo}>Live Demo</a>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = 'Projects | thatblindgeye';
  }, []);

  useEffect(() => {
    setProjects(work.projects);
  }, []);

  return (
    <div>
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </div>
  );
}
