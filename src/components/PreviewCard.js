import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';

const PreviewCard = ({ image, header, meta, description }) => {
  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? event.delta[0] : 0
      } deg)`,
    });
  });

  return (
    <div {...bind()}>
      <animated.div style={{ ...style }}>
        {' '}
        <StyledCard
          image={image}
          header={header}
          meta={meta}
          description={description}
        />
      </animated.div>
    </div>
  );
};

export default PreviewCard;

const StyledCard = styled(Card)`
  flex-shrink: 0;

  margin: 30px 8px !important;
`;
