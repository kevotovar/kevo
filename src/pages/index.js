import React from 'react';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';

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
      <section className="mt-4">
        {/* {nodes.map((node) => (
          <div key={node.id}>
            <h2 className="text-xl">
              <a>{node.frontmatter.title}</a>
            </h2>
            <div>{node.excerpt}</div>
          </div>
        ))} */}
      </section>
    </Layout>
  );
}

export default IndexPage;
