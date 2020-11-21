import React from 'react';
import styled from 'styled-components';
import { Container, Segment } from 'semantic-ui-react';

import StyledHeroImage from '../StyledHeroImage';
import PreviewSlider from '../PreviewSlider';

const ClothingContent = () => {
  return (
    <div>
      {' '}
      <div className='ui container'>
        <StyledHeroImage source='https://picsum.photos/1200/600?random=11' />
      </div>
      <PreviewSlider />
    </div>
  );
};

export default ClothingContent;
