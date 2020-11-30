import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import StyledHeroImage from '../StyledHeroImage';
import PreviewSlider from '../PreviewSlider';
import { fetchContentAPIData } from '../../actions';

const MMFContent = ({ fetchContentAPIData }) => {
  useEffect(() => {
    fetchContentAPIData();
  }, []);

  return (
    <div>
      {' '}
      <div className='ui container'>
        <StyledHeroImage source='https://picsum.photos/1200/600?random=11' />
      </div>
      {/*
        <PreviewSlider
        data={clothingData.seasonOne}
        clothingImages={clothingImages}
        fetchAPIData={fetchAPIData}
        headerName='Volume One'
      /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.MMFData,
  };
};
export default connect(mapStateToProps, { fetchContentAPIData })(MMFContent);
