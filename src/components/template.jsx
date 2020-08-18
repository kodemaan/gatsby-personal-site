import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Template = (props) => {
  const { children, pageContext } = props
  const { frontmatter } = pageContext
  return (<div className='container flex flex-wrap mx-auto'>
    <title>{`Steve Smith - ${frontmatter.title}`}</title>
    <div className='w-full flex flex-col sm:flex-row justify-center sm:justify-start sm:mt-4 h-20 sm:h-16 text-2xl'>
      <div>Steven Smith</div><div className='hidden sm:block'>&nbsp;-&nbsp;</div><div>Senior Software Engineer</div>
    </div>
    <div className='w-full flex'>
      <div className='nav-link-first'><Link to="/">Home</Link></div>
      <div className='nav-link'><Link to="/about">About Me</Link></div>
    </div>
    <div className='pt-4'>
      {children}
    </div>
  </div>)
}

Template.propTypes = {
  children: PropTypes.element,
  pageContext: PropTypes.object
}

export default Template
