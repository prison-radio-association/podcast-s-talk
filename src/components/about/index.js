import React from 'react';

const About = ({ markup }) => (
  <section className="about text-white">
    <div className="container-fluid pt-4 pb-2">
      <h1 className="about__title mb-4 pb-2 section-title">About</h1>
      <div dangerouslySetInnerHTML={{ __html: markup}} />
    </div>
  </section>
);

export default About;