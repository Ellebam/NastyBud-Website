import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import StyledHeroImage from '../StyledHeroImage';
import PreviewSlider from '../PreviewSlider';
import { fetchContentAPIData } from '../../actions';

const MMFContent = ({ data, dataStatus, fetchContentAPIData }) => {
  const route = '/MMFData';
  useEffect(() => {
    fetchContentAPIData(route);
  }, []);

  return (
    <div>
      {' '}
      <div className='ui container'>
        <StyledHeroImage source='https://picsum.photos/1200/600?random=11' />
      </div>
      {renderContent(dataStatus, data)}
    </div>
  );
};

const renderContent = (dataStatus, data) => {
  if (dataStatus.isLoaded) {
    return (
      <PreviewSlider
        data={data.vol1}
        fetchContentAPIData={fetchContentAPIData}
        headerName='Volume One'
      />
    );
  } else {
    return;
  }
};

const mapStateToProps = (state) => {
  return {
    dataStatus: state.MMFStatus,
    data: state.MMFStatus.MMFData,
  };
};
export default connect(mapStateToProps, { fetchContentAPIData })(MMFContent);
