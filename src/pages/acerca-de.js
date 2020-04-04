import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  return (
    <Layout>
      <SEO title="Acerca de" />

      <section>
        <h1>Soy Kevin Tovar</h1>
        <h2>Desarrollador frontend</h2>
        <p>
          Actualmente me encuentro trabajando en{' '}
          <a className="text-blue-500 hover:underline" href="https://apli.jobs">
            Apli
          </a>
        </p>
      </section>
    </Layout>
  );
}

export default AboutPage;
