import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

export default ({ className = '', url = '', size = 64 }) => {
  let absUrl = url;

  if (typeof location !== 'undefined') {
    absUrl = `${location.protocol}//${location.host}${url}`;
  }

  return (
    <div className={`share-list d-flex justify-content-evenly flex-wrap ${className}`}>
      <FacebookShareButton url={absUrl} >
        <FacebookIcon size={size} />
      </FacebookShareButton>
      <TwitterShareButton url={absUrl} >
        <TwitterIcon size={size} />
      </TwitterShareButton>
      <WhatsappShareButton url={absUrl} >
        <WhatsappIcon size={size} />
      </WhatsappShareButton>
      <RedditShareButton url={absUrl} >
        <RedditIcon size={size} />
      </RedditShareButton>
      <TumblrShareButton url={absUrl} >
        <TumblrIcon size={size} />
      </TumblrShareButton>
      <EmailShareButton url={absUrl} >
        <EmailIcon size={size} />
      </EmailShareButton>
    </div>
  );
};