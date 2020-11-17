import React from 'react';
import styled from 'styled-components';
import { Reveal, Header, Image } from 'semantic-ui-react';

const TeaserBanner = () => {
  return (
    <div>
      <StyledHeader as='h2'> Garments</StyledHeader>
      <StyledReveal animated='move'>
        <StyledRevealedContent visible>
          <Image src='https://picsum.photos/960/200?random=1?t0' />
        </StyledRevealedContent>
        <StyledRevealedContent hidden>
          <Image src='https://picsum.photos/960/200?random=1?t=1' />
        </StyledRevealedContent>
      </StyledReveal>
    </div>
  );
};

const StyledHeader = styled(Header)`
  margin-bottom: 0;
`;

const StyledReveal = styled(Reveal)`
  margin: 0 auto;
  text-align: center !important;
`;

const StyledRevealedContent = styled(Reveal.Content)`
  width: 100%;
`;

export default TeaserBanner;
