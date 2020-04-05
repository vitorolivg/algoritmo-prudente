import React from 'react';
import './Technologies.css';
import Card from '../Card';
import Technology, { Techs } from './technology';

const Technologies = () => (
  <ul className="technologies" aria-labelledby="technologies">
    {Object.keys(Techs).map((tech, index) => (
      <li key={`tech-${index}`}>
        <Card>
          <Technology name={tech} />
        </Card>
      </li>
    ))}
  </ul>
);

const TechnologiesArticle = () => (
  <article className="technologies-article">
    <h2 id="technologies">Tech Experience</h2>
    <Technologies />
  </article>
);

export default TechnologiesArticle;
