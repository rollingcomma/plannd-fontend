import React from 'react';
import { useWindowDimensions } from '../../context/customerHook';

const IndexHeader = () => {
  const { width } = useWindowDimensions()

  return (
    <div className="top-banner">
      <div className="top-banner-logo">
        <div className="logo">
          <img alt="" src="/assets/logo-horizontal.png" className="header_logo" />
        </div>
      </div>
      { width > 600 && 
        <div className="login">
          <img alt="" src="/assets/user.png" className="icon-small" />
          <a href="/login" className="text-body pr-2">Sign In</a>
          <span> or</span>
          <a href="/register" className="text-body pl-2">Register</a>
      </div>
      }
    </div>
  )
  // }
}

// }

export default IndexHeader;