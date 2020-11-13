import React from 'react';
import styled from 'styled-components';
import {} from '@fortawesome/free-brands-svg-icons';
import { Segment, Container, Button, Icon } from 'semantic-ui-react';

import spaceBackground from '../img/outerspace-52.gif';

class Footer extends React.Component {
  render() {
    return (
      <StickyFooterContainer>
        <div className='ui segment large' style={footerStyle}>
          <Segment vertical>
            <Container textAlign='center'>
              <Button circular color='blue' inverted icon='instagram' />

              <Button circular color='red' inverted icon='youtube' />
              <Button circular color='teal' inverted icon='twitter' />
              <Button circular color='yellow' inverted icon='snapchat' />
              <Button circular color='orange' inverted icon='google plus g' />
              <Button circular color='green' inverted icon='phone' />
              <Button circular color='white' inverted icon='mail' />
            </Container>
            <Icon size='massive' name='studiovinari' inverted />
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
  min-width: 100%;
  background: #000000;
`;

let footerStyle = {
  backgroundImage: `url(${spaceBackground})`,
  backgroundRepeat: 'repeat - x',
  textAlign: 'center',
};
export default Footer;
