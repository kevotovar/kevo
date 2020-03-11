import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Inicio"
      />

      <section className="">
        <h1 className="bg-yellow-400 text-2xl font-bold inline-block my-4 p-3">
          Mi sitio personal
        </h1>
      </section>
      <section>
        <p>
          Soy un desarrollador Frontend trabajando en{' '}
          <a
            href="https://apli.jobs"
            target="blank"
            className="underline text-blue-500"
          >
            Apli
          </a>
        </p>
      </section>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default IndexPage;
