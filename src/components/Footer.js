import React from 'react';
import styled from 'styled-components';
import {} from '@fortawesome/free-brands-svg-icons';
import { Segment, Container, Button, Icon } from 'semantic-ui-react';

import spaceBackground from '../img/outerspace-52.gif';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <StickyFooterContainer>
        <div className='ui segment large' style={footerStyle}>
          <Segment vertical>
            <Container textAlign='center'>
              <StyledBrandButton
                circular
                color='blue'
                inverted
                icon='instagram'
              />
              <StyledBrandButton circular color='red' inverted icon='youtube' />
              <StyledBrandButton
                circular
                color='teal'
                inverted
                icon='twitter'
              />
              <StyledBrandButton
                circular
                color='yellow'
                inverted
                icon='snapchat'
              />
              <StyledBrandButton
                circular
                color='orange'
                inverted
                icon='google plus g'
              />
              <StyledBrandButton circular color='green' inverted icon='phone' />
              <StyledBrandButton circular color='white' inverted icon='mail' />
            </Container>
            <MainIconContainer>
              <Icon size='huge' name='studiovinari' inverted />
            </MainIconContainer>

            <StyledParagraph>
              {' '}
              &copy; Ribbon <br /> Website created by Ellebam
            </StyledParagraph>
          </Segment>
        </div>
      </StickyFooterContainer>
    );
  }
}

const StickyFooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  flex: 1;
  width: 100%;
  background: #000000;
`;

const MainIconContainer = styled.div`
  margin: 0.5em;
`;

const StyledBrandButton = styled(Button)`
  margin: 0.3em !important;
`;

const StyledParagraph = styled.p`
  color: #f2f2f2;
`;
let footerStyle = {
  backgroundImage: `url(${spaceBackground})`,
  backgroundRepeat: 'repeat - x',
  textAlign: 'center',
};

export default Footer;
