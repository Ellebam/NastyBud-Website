import React from 'react';
import styled from 'styled-components';
import { Segment, Image } from 'semantic-ui-react';

import TeaserBanner from '../TeaserBanner';

class Opener extends React.Component {
  render() {
    return (
      <div className='ui container '>
        <StyledHeroImage
          fluid
          rounded
          src='https://picsum.photos/900/400?random=1'
        />

        <TeaserBanner
          headerText='Garments'
          coverImage='https://picsum.photos/1200/200?random=1?t0'
          revealedImage='https://picsum.photos/1200/200?random=1?t1'
        />

        <TeaserBanner
          headerText='Match My Fit'
          coverImage='https://picsum.photos/1200/200?random=1?t2'
          revealedImage='https://picsum.photos/1200/200?random=1?t3'
        />

        <TeaserBanner
          headerText='Blog'
          coverImage='https://picsum.photos/1200/200?random=1?t4'
          revealedImage='https://picsum.photos/1200/200?random=1?t5'
        />

        <TeaserBanner
          headerText='Story'
          coverImage='https://picsum.photos/1200/200?random=1?t6'
          revealedImage='https://picsum.photos/1200/200?random=1?t7'
        />
      </div>
    );
  }
}

const StyledHeroImage = styled(Image)`
  margin-top: 0.5em;
`;

export default Opener;
