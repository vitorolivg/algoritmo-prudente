import React from 'react';
import './footer.css';
import Envelope from '../icon/envelope';
import Github from '../icon/github';
import Linkedin from '../icon/linkedin';

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

interface FooterProps {
  title: string;
  currentYear: number;
}

const Footer = ({ title, currentYear }: FooterProps) => (
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
      {title} © {currentYear}
    </p>
  </footer>
);

export default Footer;
