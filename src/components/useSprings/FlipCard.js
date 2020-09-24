import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function FlipCard() {
  const [flipped, setFlip] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div>
      <div onClick={() => setFlip((state) => !state)} className="FlipCard-container">
        <animated.div style={{ opacity: opacity.interpolate((opacity) => 1 - opacity), transform }} className="card-img card-back" />
        <animated.div style={{ transform: transform.interpolate((t) => `${t} rotateX(180deg)`), opacity }} className="card-img card-front" />
      </div>
    </div>
  );
}
