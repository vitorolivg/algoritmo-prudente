import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../header';
import Footer from '../footer';
import './layout.css';

const Layout: React.FC = ({ children }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          currentYear
        }
      }
    }
  `);

  const { title, currentYear } = siteMetadata;

  return (
    <>
      <Header title={title} />
      <main className="app">{children}</main>
      <Footer title={title} currentYear={currentYear} />
    </>
  );
};
export default Layout;
