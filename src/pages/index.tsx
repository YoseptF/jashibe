import React from 'react';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import style from './index.module.css';
import Layout from '../components/layout';
import jashiReno from '../images/jashiReno.gif';
import SEO from '../components/seo';
import money from '../images/icons/money.svg';
import faq from '../images/icons/question.svg';
import animation from '../images/icons/film.svg';
import work from '../images/icons/brush.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={style.base} />
    <main className={style.container}>
      <div
        className={style.background}
        style={{
          background: `url(${jashiReno}) center center/cover no-repeat`,
        }}
      />
      <section className={style.info}>
        <AniLink to="/commissions" paintDrip hex="#fff">
          <img src={money} alt="commissions" />
        </AniLink>
        <AniLink
          paintDrip
          hex="#fff"
          to="/work"
        >
          <img src={work} alt="work" />
        </AniLink>
        <AniLink
          paintDrip
          hex="#fff"
          to="/animation"
        >
          <img src={animation} alt="animation" />
        </AniLink>
        <AniLink
          paintDrip
          hex="#fff"
          to="/faq"
        >
          <img src={faq} alt="faq" />
        </AniLink>
      </section>
    </main>
  </Layout>
);

export default IndexPage;
