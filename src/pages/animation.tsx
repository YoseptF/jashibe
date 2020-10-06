import React from 'react';
import Back from '../components/Back';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Animation = () => (
  <Layout>
    <SEO title="Animation" />
    <Back />
    <div className={style.base} />
    <main className={style.main}>helooo</main>
  </Layout>
);

export default Animation;
