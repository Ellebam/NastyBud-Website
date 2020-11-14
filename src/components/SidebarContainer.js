import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVestPatches,
  faRibbon,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { faPiedPiperHat } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

import { TEXT_COLOR } from '../theme/colors';

const SidebarContainer = ({ visible }) => {
  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      vertical
      visible={visible}
      width='thin'
    >
      <Menu.Item as='a'>
        <StyledIconDiv>
          <FontAwesomeIcon icon={faHome} size='lg' />
        </StyledIconDiv>
        Home
      </Menu.Item>

      <Menu.Item as='a'>
        <StyledIconDiv>
          <FontAwesomeIcon icon={faVestPatches} size='lg' />
        </StyledIconDiv>
        Garments
      </Menu.Item>
      <Menu.Item as='a'>
        <StyledIconDiv>
          <FontAwesomeIcon icon={faPiedPiperHat} size='lg' />
        </StyledIconDiv>
        MMF
      </Menu.Item>
      <Menu.Item as='a'>
        <StyledIconDiv>
          <FontAwesomeIcon icon={faNewspaper} size='lg' />
        </StyledIconDiv>
        Blog
      </Menu.Item>
      <Menu.Item as='a'>
        <StyledIconDiv>
          <FontAwesomeIcon icon={faRibbon} size='lg' rotation={180} />
        </StyledIconDiv>
        Story
      </Menu.Item>
    </Sidebar>
  );
};

const StyledIconDiv = styled.div`
  margin-bottom: 4px;
  color: ${TEXT_COLOR};
`;

const mapStateToProps = (state) => {
  return { visible: state.sidebarVisibility.sidebarVisible };
};

export default connect(mapStateToProps)(SidebarContainer);
