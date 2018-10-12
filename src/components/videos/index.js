import React from 'react';
import Vimeo from 'react-vimeo';

const VideoWrapper = props => (
  <div className="col">{console.log(props)}
    <div className="video d-flex flex-column flex-sm-row">
      <div className="video-wrapper">
        <Vimeo videoId={props.frontmatter.vid} />
      </div>
      <div className="video-body">
        <h2 className="video-title mt-0 mb-sm-2 border-bottom pb-2">{props.frontmatter.title}</h2>
        <p>{props.excerpt}</p>
      </div>
    </div>
  </div>
);

function renderRows(videos) {
  const rows = [];
  for (let i = 0; i < videos.length; i++) {
    rows.push(
      <div className="row mb-4" key={i}>
        <VideoWrapper {...videos[i].node} />
      </div>
    )
  }

  return rows;
}

const Videos = ({ videos }) => (
  <section className="videos text-white">
    <div className="container-fluid pt-4 pb-2">
      <h1 className="videos__title mb-4 pb-2 section-title">Videos</h1>
      {renderRows(videos)}
    </div>
  </section>
);

export default Videos;
