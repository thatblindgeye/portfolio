import React, { useEffect, useState } from 'react';
import ProjectCard from '../Cards/ProjectCard';
import work from '../../work.json';

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
