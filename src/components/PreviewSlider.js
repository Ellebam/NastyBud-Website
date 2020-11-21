import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { Card } from 'semantic-ui-react';

const PreviewSlider = () => {
  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      } deg)`,
    });
  });

  return (
    <div>
      <StyledBanner>
        <StyledContainer {...bind()}>
          <animated.div style={{ ...style }}>
            <StyledCard
              image='https://picsum.photos/500/500?random?t1'
              header='Blue Coral'
              meta='Blue Tee'
              description=' This is a placeholder for shirt description.
              It will contain some short text about the product'
            />
          </animated.div>
          <animated.div style={{ ...style }}>
            {' '}
            <StyledCard
              image='https://picsum.photos/500/500?random?t2'
              header='Orange Space'
              meta='Orange Tee'
              description=' This is a placeholder for shirt description.
              It will contain some short text about the product'
            />
          </animated.div>
          <animated.div style={{ ...style }}>
            <StyledCard
              image='https://picsum.photos/500/500?random?t3'
              header='White Smoke'
              meta='White Tee'
              description=' This is a placeholder for shirt description.
              It will contain some short text about the product'
            />
          </animated.div>
          <animated.div style={{ ...style }}>
            <StyledCard
              image='https://picsum.photos/500/500?random?t4'
              header='Black Mamba'
              meta='Black Tee'
              description=' This is a placeholder for shirt description.
              It will contain some short text about the product'
            />
          </animated.div>
          <animated.div style={{ ...style }}>
            <StyledCard
              image='https://picsum.photos/500/500?random?t6'
              header='Ancient Gray'
              meta='Gray Tee'
              description=' This is a placeholder for shirt description.
              It will contain some short text about the product'
            />
          </animated.div>

          <animated.div style={{ ...style }}>
            {' '}
            <StyledCard
              image='https://picsum.photos/500/500?random?t5'
              header='Green Leaf'
              meta='Green Tee'
              description=' This is a placeholder for shirt description.
              It will contain some short text about the product'
            />
          </animated.div>

          <animated.div style={{ ...style }}>
            <StyledCard
              image='https://picsum.photos/500/500?random?t5'
              header='Green Leaf'
              meta='Green Tee'
              description=' This is a placeholder for shirt description.
              It will contain some short text about the product'
            />
          </animated.div>
        </StyledContainer>
      </StyledBanner>
    </div>
  );
};

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const StyledCard = styled(Card)`
  flex-shrink: 0;

  margin: 30px 8px !important;
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
