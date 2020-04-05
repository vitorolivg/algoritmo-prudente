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
          siteTitle
          currentYear
        }
      }
    }
  `);

  const { siteTitle, currentYear } = siteMetadata;

  return (
    <>
      <Header title={siteTitle} />
      <main className="app">{children}</main>
      <Footer title={siteTitle} currentYear={currentYear} />
    </>
  );
};
export default Layout;
