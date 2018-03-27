import React from 'react';

const Contact = ({ markup }) => (
  <section className="contact bg-dark text-white">
    <div className="container-fluid pt-4 pb-2">
      <h1 className="contact__title mb-4 pb-2 section-title">Contact</h1>
      <div dangerouslySetInnerHTML={{ __html: markup}} />
    </div>
  </section>
);

export default Contact;