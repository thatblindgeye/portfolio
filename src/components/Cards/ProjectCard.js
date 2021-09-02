import React from 'react';

export default function ProjectCard({ project }) {
  const { name, description, images, github, demo } = project;
  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      <a href={github}>GitHub Repo</a>
      <a href={demo}>Live Demo</a>
    </div>
  );
}
