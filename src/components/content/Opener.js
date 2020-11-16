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

        <Segment>Slider 1</Segment>
        <Segment>Slider 2</Segment>
        <Segment>Slider 3</Segment>
        <Segment>Slider 4</Segment>

        <Segment>Slider 1</Segment>
        <Segment>Slider 2</Segment>
        <Segment>Slider 3</Segment>
        <Segment>Slider 4</Segment>

        <Segment>Slider 1</Segment>
        <Segment>Slider 2</Segment>
        <Segment>Slider 3</Segment>
        <Segment>Slider 4</Segment>

        <Segment>Slider 1</Segment>
        <Segment>Slider 2</Segment>
        <Segment>Slider 3</Segment>
        <Segment>Slider 4</Segment>

        <Segment>Slider 1</Segment>
        <Segment>Slider 2</Segment>
        <Segment>Slider 3</Segment>
        <Segment>last slider</Segment>
      </div>
    );
  }
}

const StyledHeroImage = styled(Image)`
  margin-top: 0.5em;
`;

export default Opener;
