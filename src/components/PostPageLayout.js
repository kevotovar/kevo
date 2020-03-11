import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const shortcodes = { Link };

export default function PageTemplate({ data }) {
  return (
    <div>
      <h1>{data.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{data.body}</MDXRenderer>
      </MDXProvider>
    </div>
  );
}

// export const pageQuery = graphql``;

PageTemplate.propTypes = {
  data: PropTypes.any.isRequired,
};
