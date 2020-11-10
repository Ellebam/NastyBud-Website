import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { hideSidebar } from '../actions';

const SidebarContainer = ({ visible }) => {
  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      vertical
      visible={visible}
      width='thin'
      onHide={() => hideSidebar()}
    >
      <div>sample text</div>
    </Sidebar>
  );
};

const mapStateToProps = (state) => {
  return { visible: state.sidebarVisibility.sidebarVisible };
};

export default connect(mapStateToProps, { hideSidebar })(SidebarContainer);
