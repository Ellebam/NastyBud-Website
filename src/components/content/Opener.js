import React from 'react';
import styled from 'styled-components';
import { Segment, Image } from 'semantic-ui-react';

class Opener extends React.Component {
  render() {
    return (
      <div className='ui container '>
        <StyledHeroImage
          fluid
          rounded
          src='https://picsum.photos/900/400?random=1'
        />

        <Segment>oida</Segment>
        <Segment>oida</Segment>
        <Segment>oida</Segment>
        <Segment>oida</Segment>
      </div>
    );
  }
}

const StyledHeroImage = styled(Image)`
  margin-top: 0.5em;
`;
export default Opener;
