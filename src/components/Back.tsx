import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import back from '../images/icons/back.svg';

const Back = () => (
  <AniLink
    paintDrip
    hex="#fff"
    to="/"
    style={{
      position: 'absolute',
      left: '2%',
      top: '50%',
      transform: 'transtale(-2%,-50%)',
    }}
  >
    <img src={back} style={{ maxHeight: '4vmax' }} alt="back_button" />

  </AniLink>
);

export default Back;
