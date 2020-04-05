import React from 'react';
import './Description.css';
import Agile from '../icon/Agile';
import Rocket from '../icon/Rocket';

const iconProps = {
  width: 90,
  heigth: 90,
};

const Section = () => (
  <section className="description">
    <div>
      <Rocket height={iconProps.heigth} width={iconProps.width} />
      <p>
        <strong>Frontend engineering</strong> who exhales innovation, always looking to evolve and deliver outstanding
        experiences for users. Currently based on Porto building amazing products with our partners.
      </p>
    </div>
    <div>
      <Agile height={iconProps.heigth} width={iconProps.width} />
      <p>
        <strong>Agile first!</strong> Experience with Agile methodologies, using it to potentialize the team performance
        and deliver value to the business.
      </p>
    </div>
  </section>
);

export default Section;
