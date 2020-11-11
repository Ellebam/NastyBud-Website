import React, { useEffect } from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';
import Header from './Header';
import SidebarContainer from './SidebarContainer';
import { connect } from 'react-redux';
import { hideSidebar, showSidebar } from '../actions';

const App = ({ sidebarVisible, hideSidebar }) => {
  return (
    <div style={{ height: '100vh' }}>
      <Sidebar.Pushable>
        <SidebarContainer />
        <Sidebar.Pusher
          onClick={() => (sidebarVisible ? hideSidebar() : {})}
          dimmed={sidebarVisible}
        >
          <div>
            <Header />
            <div>
              <Segment>oida</Segment>
              <Segment>oida</Segment>
              <Segment>oida</Segment>
              <Segment>oida</Segment>
            </div>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sidebarVisible: state.sidebarVisibility.sidebarVisible,
  };
};
export default connect(mapStateToProps, { hideSidebar, showSidebar })(App);
