import React from 'react';
import { connect } from 'react-redux';
import { screenResize, showSidebar, hideSidebar } from '../actions';

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
        <a className=' right item'> Garments</a>
        <a className=' right item'> MMF</a>
        <a className=' right item'> Blog</a>
        <a className=' right item'> Story</a>
      </div>
    );
  };

  renderNavMenu = () => {
    return (
      <div onClick={() => this.toggleSidebar()} className='toc item'>
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
      <div className='ui container'>
        <div className=' ui large secondary  pointing menu'>
          <a className='left  header item'>
            RIBBON
            <i className='studiovinari icon' />
          </a>
          {this.renderNavigation()}
        </div>
      </div>
    );
  }
}

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
