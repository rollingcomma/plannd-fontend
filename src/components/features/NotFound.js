import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div className="app">
      <div className="d-flex flex-column w-50 mx-auto">
      <img src="/assets/banner_error_404.jpg" alt="page not found" className="mx-auto" />
      <div className="mx-auto mt-5">
          <span>If you've already logged in, you may want back to </span>
        <Link to="/user/dashboard">home page. </Link>
        <span> Or </span>
        <Link to="/login">login to continue?</Link>
        </div>
      </div>
    </div>)
}

export default NotFound