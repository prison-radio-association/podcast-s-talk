import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = ({ markup, socialmedia }) => (
  <section className="contact bg-dark text-white">
    <div className="container-fluid pt-4 pb-2">
      <h1 className="contact__title mb-4 pb-2 section-title">Contact</h1>
      <div dangerouslySetInnerHTML={{ __html: markup}} />
      <ul className="nav navbar-nav d-flex flex-row mb-4">
          {socialmedia.map(url => (
            <li key={url} className="mr-2">
              <SocialIcon
                url={url}
                color="white"
                style={{ height: 50, width: 50 }}
              />
            </li>
          ))}
        </ul>
    </div>
  </section>
);

export default Contact;