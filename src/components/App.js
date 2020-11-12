import { Sidebar, Segment, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './Header';
import SidebarContainer from './SidebarContainer';
import { hideSidebar, showSidebar } from '../actions';
import Footer from './Footer';

const App = ({ sidebarVisible, hideSidebar }) => {
  return (
    <div>
      <Sidebar.Pushable>
        <SidebarContainer />
        <StyledPageContainer
          onClick={() => (sidebarVisible ? hideSidebar() : {})}
          dimmed={sidebarVisible}
        >
          <StyledPageContainer>
            <Header />
            <div>
              <Segment>oida</Segment>
              <Segment>oida</Segment>
              <Segment>oida</Segment>
              <Segment>
                <Image
                  src='../img/outerspace-52.gif'
                  alt='gif of a moving galaxy'
                />
              </Segment>
            </div>
          </StyledPageContainer>
          <Footer />
        </StyledPageContainer>
      </Sidebar.Pushable>
    </div>
  );
};

const StyledPageContainer = styled(Sidebar.Pusher)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const mapStateToProps = (state) => {
  return {
    sidebarVisible: state.sidebarVisibility.sidebarVisible,
  };
};
export default connect(mapStateToProps, { hideSidebar, showSidebar })(App);
