import React from 'react'
import { Link } from 'gatsby'
import templateStyles from './template.module.sass'
import 'normalize.css'

const Template = ({ children }) =>
  <div className={templateStyles.body}>
    <div className={templateStyles.title}>
      <h2>Steven Smith - Senior Software Engineer</h2>
    </div>
    <div className={templateStyles.navigation}>
      <div className={templateStyles.link}><Link to="/">Home</Link></div>
      <div className={templateStyles.link}><Link to="/about">About Me</Link></div>
    </div>
    <div className={templateStyles.content}>
      {children}
    </div>
  </div>

export default Template
