import React from "react";
import ReactDOM from "react-dom";
import BaseMenu from './BaseMenu';
import PropTypes from 'prop-types'

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open || false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleEscape = this.handleEscape(this);
  }

  componentDidMount() {
    if (window === 'undefined') return;

    document.addEventListener('click', this.handleClickOutside);
    document.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    if (window === 'undefined') return;

    document.removeEventListener('click', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleEscape);
  }

  handleClickOutside(event) {
    if (!this.rootNode.contains(event.target)) {
      this.setState({ open: false });
    }
  }

  handleEscape(event) {
    if (event.keyCode === 27) {
      this.setState({ open: false });
    }
  }

  toggleMenu(event) {
    event.preventDefault();

    this.setState({
      open: !this.state.open
    });
  }

  handleLinkClick(link) {
    this.setState({ open: false });
    this.props.linkClickHandler(link);
  }

  render() {
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

