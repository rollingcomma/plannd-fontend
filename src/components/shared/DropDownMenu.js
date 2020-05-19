import React,{useState} from "react";
import ReactDOM from "react-dom";
import BaseMenu from './BaseMenu';
import PropTypes from 'prop-types'

const DropdownMenu = (props) => {
  
    const [state, setState] = useState({open: props.open || false})

    
  const handleClickOutside = (event) => {
    if (!this.rootNode.contains(event.target)) {
      setState({ open: false });
    }
  }

  const handleEscape = (event) => {
    if (event.keyCode === 27) {
      setState({ open: false });
    }
  }

  const toggleMenu = (event) => {
    event.preventDefault();

    setState({
      open: !state.open
    });
  }

  const handleLinkClick= (link) => {
    setState({ open: false });
    props.linkClickHandler(link);
  }

  
  const { props, state } = this;
  const triggerClass = ['menu-trigger'];
  const wrapperClasses = [
    'menu-wrapper',
    `menu-${state.open ? 'opened' : 'closed'}`
  ];

    // if (state.open) {
    //   triggerClass.push('color-primary');
    // }

    return (
      <BaseMenu {...this.props} open={this.state.open} toggle={this.toggleMenu}/>
    );
}

DropdownMenu.propTypes = {
  links: PropTypes.shape({}).isRequired,
  // linkClickHandler: PropTypes.func.isRequired,
  open: PropTypes.bool
};

DropdownMenu.defaultProps = {
  open: false
};

export default DropdownMenu;

