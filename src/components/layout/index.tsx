import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../header';
import Footer from '../footer';
import './layout.css';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header title={data.site.siteMetadata.title} />
      <main className="app">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
