import React from 'react';

const IndexHeader = () => {
  // render() {
  return (
    <div className="top-banner">
      <div className="d-flex w-75">
        <div className="logo">
          <img alt="" src="/assets/logo-horizontal.png" className="header_logo" />
        </div>
      </div>
      <div className="login">
        <img alt="" src="/assets/user.png" className="icon-small" />
        <a href="/login" className="text-body mr-2">Sign In</a>
        <span> or</span>
        <a href="/register" className="text-body ml-2">Register</a>
      </div>
    </div>
  )
  // }
}

// }

export default IndexHeader;