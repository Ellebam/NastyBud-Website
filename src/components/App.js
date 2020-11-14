import { Sidebar, Segment, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { hideSidebar, showSidebar } from '../actions';
import { PRIMARY_COLOR, TEXT_COLOR } from '../theme/colors';
import Header from './Header';
import SidebarContainer from './SidebarContainer';
import Footer from './Footer';
import Opener from './content/Opener';

const App = ({ sidebarVisible, hideSidebar }) => {
  return (
    <StyledPageContainer>
      <Sidebar.Pushable>
        <SidebarContainer />
        <StyledPageContainer
          onClick={() => (sidebarVisible ? hideSidebar() : {})}
          dimmed={sidebarVisible}
        >
          <StyledPageContainer>
            <Header />
            <Opener />
          </StyledPageContainer>
          <Footer />
        </StyledPageContainer>
      </Sidebar.Pushable>
    </StyledPageContainer>
  );
};

const StyledPageContainer = styled(Sidebar.Pusher)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${PRIMARY_COLOR};
  color: ${TEXT_COLOR};
`;

const mapStateToProps = (state) => {
  return {
    sidebarVisible: state.sidebarVisibility.sidebarVisible,
  };
};
export default connect(mapStateToProps, { hideSidebar, showSidebar })(App);
