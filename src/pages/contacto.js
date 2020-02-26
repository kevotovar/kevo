import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <div className="mx-auto md:w-1/2">
          <p className="mb-8 leading-loose">Estas son mis redes sociales.</p>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
