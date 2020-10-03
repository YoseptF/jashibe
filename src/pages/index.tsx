import React from 'react';
import { Link } from 'gatsby';
import style from './index.module.css';
import Layout from '../components/layout';
import jashiReno from '../images/jashiReno.gif';
import SEO from '../components/seo';
import money from '../images/icons/money.svg';
import faq from '../images/icons/question.svg';
import animation from '../images/icons/running.svg';
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
        <Link to="/prices">
          <img src={money} alt="prices" />
        </Link>
        <Link to="/work">
          <img src={work} alt="work" />
        </Link>
        <Link to="/animation">
          <img src={animation} alt="animation" />
        </Link>
        <Link to="/faq">
          <img src={faq} alt="faq" />
        </Link>
      </section>
    </main>
  </Layout>
);

export default IndexPage;
