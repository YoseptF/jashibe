import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import style from './header.module.css';
import facebook from '../images/icons/facebook.svg';
import instagram from '../images/icons/instagram.svg';
import twitter from '../images/icons/twitter.svg';
import twitch from '../images/icons/twitch.svg';

const Header = ({ siteTitle }) => (
  <header>
    <div className={style.icons}>
      <a href="https://www.facebook.com/NightyValky/"><img src={facebook} alt="facebook" /></a>
      <a href="https://www.instagram.com/jashiraptor/"><img src={instagram} alt="instagram" /></a>
      <a href="https://twitter.com/Jashiraptor"><img src={twitter} alt="twitter" /></a>
      <a href="https://www.twitch.tv/jashiraptor"><img src={twitch} alt="twitch" /></a>
    </div>
    <Link
      to="/"
      className={style.title}
    >
      <h1>
        {siteTitle
          .split('')
          .map((letter) => (
            <span
              key={`letter-${letter}-${Math.random()}`}
              className={style.letter}
            >
              {letter}
            </span>
          ))}
      </h1>
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
