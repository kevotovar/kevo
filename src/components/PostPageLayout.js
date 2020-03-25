import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';

export default function PageTemplate({ pageContext: { body, frontmatter } }) {
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <h4></h4>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

PageTemplate.propTypes = {
  pageContext: PropTypes.any.isRequired,
};
