import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './Footer.css';
import Envelope from '../icon/Envelope';
import Github from '../icon/Github';
import Linkedin from '../icon/Linkedin';

const commonDimensions = {
  width: 27,
  height: 27,
  fill: '#54677A',
};

interface LinkProps {
  href: string;
  title: string;
}

const Link: React.FC<LinkProps> = ({ href, title, children }) => (
  <a href={href} title={title} target="blank">
    {children}
  </a>
);

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            currentYear
          }
        }
      }
    `
  );
  const { siteMetadata } = site;

  return (
    <footer className="footer">
      <section className="footer-icons">
        <Link href="https://www.linkedin.com/in/vitor-oliveira-gomes-8b636b109/" title="Linkedin">
          <Linkedin {...commonDimensions} />
        </Link>
        <Link href="mailto:hello@algoritmoprudente.com" title="Email">
          <Envelope {...commonDimensions} />
        </Link>
        <Link href="https://github.com/vitorolivg" title="Github">
          <Github {...commonDimensions} />
        </Link>
      </section>
      <p>
        {siteMetadata.title} © {siteMetadata.currentYear}
      </p>
    </footer>
  );
};

export default Footer;
