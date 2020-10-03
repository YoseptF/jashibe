import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.css';
import Particles from 'react-particles-js';

const Layout = ({ children }) => {
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
      <div className="particles">
        <Particles
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 6,
                random: true,
              },
              move: {
                direction: 'bottom',
                out_mode: 'out',
              },
              line_linked: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'remove',
                },
              },
              modes: {
                remove: {
                  particles_nb: 10,
                },
              },
            },
          }}
        />
      </div>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      {children}
      <footer>
        ©
        {' '}
        {new Date().getFullYear()}
        , Built by
        {' '}
        <a href="https://www.yosept.me/">@Yosept</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
