import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Acerca de"
      />

      <section className="">
        <h1>Soy Kevin Tovar</h1>
        <h2>Desarrollador frontend</h2>
      </section>
    </Layout>
  );
}

export default AboutPage;
