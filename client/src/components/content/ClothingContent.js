import React from 'react';
import { connect } from 'react-redux';

import StyledHeroImage from '../StyledHeroImage';

const ClothingContent = () => {
  return (
    <div>
      {' '}
      <div className='ui container'>
        <StyledHeroImage source='https://picsum.photos/1200/600?random=11' />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(ClothingContent);
