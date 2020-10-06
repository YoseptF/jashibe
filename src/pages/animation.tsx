import React from 'react';
import Back from '../components/Back';

import Layout from '../components/layout';
import SEO from '../components/seo';
import style from './commisions.module.css';

const Animation = () => (
  <Layout>
    <SEO title="Animation" />
    <Back />
    <div className={style.base} />
    <main className={style.main}>helooo</main>
  </Layout>
);

export default Animation;
