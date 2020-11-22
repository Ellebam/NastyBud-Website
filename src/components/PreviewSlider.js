import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { Card } from 'semantic-ui-react';

const PreviewSlider = ({ data }) => {
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

          {renderSliderContent()}
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

  margin: 30px 15px !important;
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
