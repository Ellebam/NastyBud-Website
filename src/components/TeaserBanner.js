import React from 'react';
import styled from 'styled-components';
import { Reveal, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { TEXT_COLOR } from '../theme/colors';

const TeaserBanner = ({ headerText, coverImage, revealedImage, link }) => {
  return (
    <Link to={link}>
      {' '}
      <StyledDiv>
        <StyledHeader as='h2'> {headerText}</StyledHeader>
        <StyledReveal animated='move'>
          <StyledRevealedContent visible>
            <Image src={coverImage} />
          </StyledRevealedContent>
          <StyledRevealedContent hidden>
            <Image src={revealedImage} />
          </StyledRevealedContent>
        </StyledReveal>
      </StyledDiv>
    </Link>
  );
};

const StyledHeader = styled(Header)`
  color: ${TEXT_COLOR};
`;

const StyledReveal = styled(Reveal)`
  margin: 0 auto; ;
`;

const StyledRevealedContent = styled(Reveal.Content)`
  width: 100%;
`;

const StyledDiv = styled.div`
  margin-top: 50px;
`;

export default TeaserBanner;
