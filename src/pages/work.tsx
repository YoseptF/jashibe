import React from 'react';
import Back from '../components/Back';

import Layout from '../components/layout';
import SEO from '../components/seo';
import style from './commisions.module.css';

const Work = () => (
  <Layout>
    <SEO title="F.A.Q." />
    <Back />
    <div className={style.base} />
    <main className={style.main}>helooo</main>
  </Layout>
);

export default Work;
