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
import MMFContent from './content/MMFContent';
import ClothingContent from './content/ClothingContent';
import BlogContent from './content/BlogContent';
import StoryContent from './content/StoryContent';

const App = ({ sidebarVisible, hideSidebar }) => {
  return (
    <StyledApp>
      <BrowserRouter>
        <StyledSidebarPushable>
          <SidebarContainer />
          <StyledPageContainer
            onClick={() => (sidebarVisible ? hideSidebar() : {})}
            dimmed={sidebarVisible}
          >
            <Header />

            <Route path='/' exact component={Opener} />
            <Route path='/clothing' exact component={ClothingContent} />
            <Route path='/mmf' exact component={MMFContent} />
            <Route path='/blog' exact component={BlogContent} />
            <Route path='/story' exact component={StoryContent} />

            <Gapppp />
          </StyledPageContainer>{' '}
          <Footer />
        </StyledSidebarPushable>{' '}
      </BrowserRouter>
    </StyledApp>
  );
};

const StyledPageContainer = styled(Sidebar.Pusher)`
  
 height: 100hv;
  background: ${PRIMARY_COLOR};
  color: ${TEXT_COLOR};
  
  }
`;

const StyledSidebarPushable = styled(Sidebar.Pushable)`
  min-height: 100vh;
`;

const Gapppp = styled.div`
  height: 300px;
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const mapStateToProps = (state) => {
  return {
    sidebarVisible: state.sidebarVisibility.sidebarVisible,
  };
};
export default connect(mapStateToProps, { hideSidebar, showSidebar })(App);
