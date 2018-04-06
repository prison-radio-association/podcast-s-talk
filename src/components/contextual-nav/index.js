import React from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';
import ArrowLeft from 'open-iconic/svg/arrow-thick-left.svg';

const ContextualNav = ({
  to = '/',
  children = 'home',
  className,
}) => (
  <Link 
    className={cx('contextual-nav text-primary mb-2 d-flex align-items-center', className)}
    to={to}
  >
    <ArrowLeft /> {children}
  </Link>
);

export default ContextualNav;