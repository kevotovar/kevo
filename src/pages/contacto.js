import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faTwitter,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contacto"
      />
      <section>
        <div className="mx-auto">
          <p className="mb-2 leading-loose">Estas son mis redes sociales.</p>
          <div className="flex">
            <a href="https://github.com/kevotovar" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.instagram.com/kevtov/"
              target="blank"
              className="ml-2"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com/kevinwestmx"
              target="blank"
              className="ml-2"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://twitch.tv/kevinwestmx"
              target="blank"
              className="ml-2"
            >
              <FontAwesomeIcon icon={faTwitch} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCOpniw2OtnaylEwjn5yhuoA"
              target="blank"
              className="ml-2"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
