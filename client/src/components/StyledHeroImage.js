import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const StyledHeroImage = ({ source }) => {
  return (
    <div className='ui container '>
      <StyledImage fluid rounded src={source} />
    </div>
  );
};

const StyledImage = styled(Image)`
  margin-top: 0.5em;
`;

export default StyledHeroImage;
