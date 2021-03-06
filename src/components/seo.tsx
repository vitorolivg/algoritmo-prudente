import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import FavIcon from '../images/favicon.png';

const SEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteTitle
            keywords
            url
          }
        }
      }
    `
  );

  const { title, description, siteTitle, author, keywords, url } = site?.siteMetadata;

  const organizationSEO = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Porto',
      addressRegion: 'Porto',
      postalCode: '4465-280',
      streetAddress: 'Rua Maria Feliciana 132',
    },
    email: 'mailto:hello@algoritmoprudente.com',
    member: [
      {
        '@type': 'Organization',
      },
    ],
    alumni: [
      {
        '@type': 'Person',
        name: 'Vitor Gomes',
        jobTitle: 'Director',
      },
    ],
    name: siteTitle,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: 'author',
          content: author,
        },
        {
          name: 'keywords',
          content: keywords,
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    >
      <link rel="canonical" href={url} />
      <script type="application/ld+json">{JSON.stringify(organizationSEO)}</script>
      <link rel="icon" href={FavIcon} />
      <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
    </Helmet>
  );
};

export default SEO;
