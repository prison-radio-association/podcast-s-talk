import React from 'react';
import Episode from '../episode';

const EpisodeWrapper = props => (
  <div className="col-md mb-4">
    <div className="media media--episode border p-3">
      <div className="media-body">
        <Episode {...props} />
      </div>
    </div>
  </div>
);

function renderRows(episodes) {
  const rows = [];
  for (let i = 0; i < episodes.length; i = i + 2) {
    rows.push(
      <div className="row" key={i}>
        {episodes[i] !== undefined && <EpisodeWrapper {...episodes[i].node} />}
        {episodes[i+1] !== undefined && <EpisodeWrapper {...episodes[i+1].node} />}
      </div>
    )
  }

  return rows;
}

const Episodes = ({ episodes }) => (
  <section className="bg-white pt-5 pb-2 episodes">
    <div className="container-fluid">
      <h1 className="mb-4">Episodes</h1>
      {renderRows(episodes)}
    </div>
  </section>
);

export default Episodes;
