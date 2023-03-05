import React from 'react'
import "../styles/404page.css"
import Footer from './Footer'
import Navbar from './Navbar'

function PageNotFound() {
  return (
    <div>
        <Navbar />
        <div className='error-body'>
            <div className='error-header'>
                404
            </div>
            <div>
                <h1>Page Not Found!</h1>
                <p>Oops! The page you're looking for could not be found. It might have been moved, deleted, or perhaps never existed in the first place.</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PageNotFound