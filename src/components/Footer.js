import React from 'react';
import styled from 'styled-components';
import {} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return (
      <StickyFooterContainer className='ui inverted horizontal segment'>
        <div className='ui container'>oida</div>
      </StickyFooterContainer>
    );
  }
}

const StickyFooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  flex: 1;
  max-height: 10vh;
`;
export default Footer;
