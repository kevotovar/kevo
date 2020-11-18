import React from 'react';

import Layout from '../components/layout';

export default function Playlists() {
  return (
    <Layout>
      <iframe
        src="https://open.spotify.com/embed/playlist/0EfAGfGI2Xs2ybdn6jTXkO"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </Layout>
  );
}
