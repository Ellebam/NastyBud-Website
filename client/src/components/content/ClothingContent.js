import React from 'react';
import { connect } from 'react-redux';

import StyledHeroImage from '../StyledHeroImage';
import PreviewSlider from '../PreviewSlider';
import { fetchAPIData } from '../../actions';

const ClothingContent = ({ clothingData, clothingImages }) => {
  return (
    <div>
      {' '}
      <div className='ui container'>
        <StyledHeroImage source='https://picsum.photos/1200/600?random=11' />
      </div>
      <PreviewSlider
        data={clothingData.seasonOne}
        clothingImages={clothingImages}
        fetchAPIData={fetchData}
        headerName='Season One'
      />
    </div>
  );
};

const fetchData = () => {
  fetchAPIData();
};

const mapStateToProps = (state) => {
  return {
    clothingData: state.clothingItems.clothingData,
    clothingImages: state.apiData.apiResponse,
  };
};
export default connect(mapStateToProps, { fetchAPIData })(ClothingContent);
