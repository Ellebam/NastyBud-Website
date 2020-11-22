import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { Card, Header } from 'semantic-ui-react';

import { TEXT_COLOR } from '../theme/colors';

const PreviewSlider = ({ data, headerName }) => {
  /**
   * function for setting the default rotation parameters of the used cards
   * @param style dynamic styling object given out by useSpring after transformation
   *
   */
  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  /**function for binding  */
  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      } deg)`,
    });
  });

  const renderSliderContent = (data) => {
    return data.map((item) => {
      return (
        <animated.div style={{ ...style }}>
          <StyledCard
            key={item.id}
            header={item.name}
            image={item.imageUrlFull}
            meta={`${item.color}` + ' ' + `${item.type}`}
            description={item.description}
          />
        </animated.div>
      );
    });
  };

  return (
    <div>
      <StyledBanner>
        <Header inverted size='large' textColor={TEXT_COLOR} textAlign='center'>
          {' '}
          {headerName}
        </Header>
        <StyledContainer {...bind()}>
          {renderSliderContent(data)}
        </StyledContainer>
      </StyledBanner>
    </div>
  );
};

/**
 * Smoothing of the rotating motion while scrolling fast
 * @param {Number} value rotational value (deg)
 * @param {*Number} clampAt limit for rotation
 */
const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const StyledCard = styled(Card)`
  flex-shrink: 0;

  margin: 10px 15px 30px 15px !important;
`;

const StyledContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
`;

const StyledBanner = styled.div`
  margin-top: 50px;
  width: 100vw;
  padding: 1em;
  padding-right: 2em;
  background: #000000;
`;
export default PreviewSlider;
