import React from 'react';
import { connect } from 'react-redux';

import StyledHeroImage from '../StyledHeroImage';
import PreviewSlider from '../PreviewSlider';

const ClothingContent = ({ clothingData }) => {
  return (
    <div>
      {' '}
      <div className='ui container'>
        <StyledHeroImage source='https://picsum.photos/1200/600?random=11' />
      </div>
      <PreviewSlider data={clothingData.seasonOne} headerName='Season One' />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clothingData: state.clothingItems.clothingData,
  };
};
export default connect(mapStateToProps, {})(ClothingContent);
