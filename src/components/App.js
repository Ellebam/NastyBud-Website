import { Sidebar, Segment, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import { hideSidebar, showSidebar } from '../actions';
import { PRIMARY_COLOR, TEXT_COLOR } from '../theme/colors';
import Header from './Header';
import SidebarContainer from './SidebarContainer';
import Footer from './Footer';
import Opener from './content/Opener';

const App = ({ sidebarVisible, hideSidebar }) => {
  return (
    <StyledApp>
      <Sidebar.Pushable>
        <SidebarContainer />

        <StyledPageContainer
          onClick={() => (sidebarVisible ? hideSidebar() : {})}
          dimmed={sidebarVisible}
        >
          <Header />
          <Opener />

          <Gapppp />
          <Footer />
        </StyledPageContainer>
      </Sidebar.Pushable>
    </StyledApp>
  );
};

const StyledPageContainer = styled(Sidebar.Pusher)`
  
 
  
  background: ${PRIMARY_COLOR};
  color: ${TEXT_COLOR};
  
  }
`;

const Gapppp = styled.div`
  height: 300px;
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: auto;
`;

const mapStateToProps = (state) => {
  return {
    sidebarVisible: state.sidebarVisibility.sidebarVisible,
  };
};
export default connect(mapStateToProps, { hideSidebar, showSidebar })(App);
