import React from 'react';
import { Link } from 'gatsby';
import templateStyles from './template.module.css';

const Template = ({ children }) =>
  <div className={templateStyles.title}>
    <h1>My Personal Site</h1>
    <div className={templateStyles.navigation}>
      <div className={templateStyles.link}><Link to="/about">Home</Link></div>
      <div className={templateStyles.link}><Link to="/about">About Me</Link></div>
    </div>
    <nav></nav>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    {children}
    <Link to="/about/">About me</Link>
  </div>
export default Template
