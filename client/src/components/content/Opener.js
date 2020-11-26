import React from 'react';
import StyledHeroImage from '../StyledHeroImage';

import TeaserBanner from '../TeaserBanner';

class Opener extends React.Component {
  render() {
    return (
      <div className='ui container '>
        <StyledHeroImage source='https://picsum.photos/1200/600?random=1' />
        
        <TeaserBanner
          headerText='Garments'
          coverImage='https://picsum.photos/1200/200?random=1?t0'
          revealedImage='https://picsum.photos/1200/200?random=1?t1'
          link='/clothing'
        />

        <TeaserBanner
          headerText='Match My Fit'
          coverImage='https://picsum.photos/1200/200?random=1?t2'
          revealedImage='https://picsum.photos/1200/200?random=1?t3'
          link='/mmf'
        />

        <TeaserBanner
          headerText='Blog'
          coverImage='https://picsum.photos/1200/200?random=1?t4'
          revealedImage='https://picsum.photos/1200/200?random=1?t5'
          link='blog'
        />

        <TeaserBanner
          headerText='Story'
          coverImage='https://picsum.photos/1200/200?random=1?t6'
          revealedImage='https://picsum.photos/1200/200?random=1?t7'
          link='story'
        />
      </div>
    );
  }
}

export default Opener;
