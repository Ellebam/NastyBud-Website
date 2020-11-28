import React, { useRef } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { Card, Header, Button } from 'semantic-ui-react';

import { TEXT_COLOR } from '../theme/colors';
import { extractImgFromDir } from '../HelperFunctions';

const PreviewSlider = ({ data, headerName, fetchAPIData, clothingImages }) => {
  const ref = useRef();

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
  /**
   * Function for scrolling with controls (e.g. Buttons)
   * @param {Number} scrollOffset determining how many pixels should be scrolled
   */
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const findGalleryDir = (dataItem) => {
    return dataItem.galleryDirectory;
  };

  const renderSliderContent = (data, fetchAPIData, clothingImages) => {
    return data.map((item) => {
      return (
        <animated.div style={{ ...style }}>
          <StyledCard
            //onClick={fetchAPIData()}
            key={item.id}
            header={item.name}
            image={item.imageUrlFull}
            meta={`${item.color}` + ` ` + `${item.type}`}
            description={
              clothingImages
              //item.description
            }
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
        <StyledContainer {...bind()} ref={ref}>
          {renderSliderContent(data, fetchAPIData, clothingImages)}
        </StyledContainer>
        <Button
          circular
          icon='chevron left'
          basic
          inverted
          color='purple'
          onClick={() => scroll(-200)}
        />
        <Button
          circular
          icon='chevron right'
          basic
          inverted
          color='purple'
          onClick={() => scroll(200)}
        />
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

  margin: 25px 15px 30px 15px !important;
`;

const StyledContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  scroll-behavior: smooth;
`;

const StyledBanner = styled.div`
  margin-top: 50px;
  width: 100vw;
  padding: 1em;
  padding-right: 2em;
  background: #000000;
  overflow-x: scroll;
  text-align: center;
`;
export default PreviewSlider;
