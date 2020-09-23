import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Container(props) {
  const animationProps = useSpring({ to: { opacity: 1, color: 'red' }, from: { opacity: 0, color: 'black' }, config: { duration: 2000 } });

  return (
    <div className="container">
      <animated.div style={animationProps} className="animation-container">
        <div className="animation">{props.componentToRender}</div>
      </animated.div>
    </div>
  );
}
