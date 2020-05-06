import React from 'react'

const BaseMenu = props => (
  <div ref={props.containerRef}>
    {props.children}

    {(!props.children || props.open) && (
      <div offsetTop={props.offsetTop}>
        <ul>
          {props.items.map(item => (
            <li key={item.label}>
              <a href={item.link}>
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

BaseMenu.defaultProps = {
  children: undefined,
  containerRef: null,
  offsetTop: 0,
  open: false
};

export default BaseMenu