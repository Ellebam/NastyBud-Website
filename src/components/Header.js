import React from 'react';
import { connect } from 'react-redux';
import { screenResize, showSidebar, hideSidebar } from '../actions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TEXT_COLOR } from '../theme/colors';

class Header extends React.Component {
  toggleSidebar = () => {
    if (!this.props.sidebarVisible) {
      this.props.showSidebar();
      return;
    }
    this.props.hideSidebar();
  };

  renderNavAreas = () => {
    return (
      <div className='ui container'>
        <Link to='/' className=' right item '>
          {' '}
          Home
        </Link>

        <Link to='/clothing' className=' right item'>
          Garments
        </Link>

        <Link to='/mmf' className=' right item'>
          {' '}
          MMF
        </Link>
        <Link to='/blog' className=' right item'>
          {' '}
          Blog
        </Link>
        <Link to='/story' className=' right item'>
          {' '}
          Story
        </Link>
      </div>
    );
  };

  renderNavMenu = () => {
    return (
      <div onClick={() => this.toggleSidebar()} className='toc right item'>
        <i className='bars icon' />
      </div>
    );
  };

  renderNavigation = () => {
    if (this.props.screenWidth > 500) {
      return this.renderNavAreas();
    } else {
      return this.renderNavMenu();
    }
  };
  render() {
    return (
      <div className='ui container '>
        <StyledHeaderArea className=' ui large secondary  pointing menu'>
          <Link to='/'>
            <a className='left  header item'>
              RIBBON
              <i className='studiovinari icon' />
            </a>
          </Link>

          {this.renderNavigation()}
        </StyledHeaderArea>
      </div>
    );
  }
}

const StyledHeaderArea = styled.div`
  & *,
  & a {
    color: ${TEXT_COLOR} !important;
  }
`;

const mapStateToProps = (state) => {
  return {
    screenWidth: state.windowsize.screenWidth,
    sidebarVisible: state.sidebarVisibility.sidebarVisible,
  };
};
export default connect(mapStateToProps, {
  screenResize,
  showSidebar,
  hideSidebar,
})(Header);
