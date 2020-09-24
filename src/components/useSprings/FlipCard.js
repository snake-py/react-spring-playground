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
        <animated.img style={{opacity: opacity.interpolate(o => 1-o), transform}} className="card-img" src="https://picsum.photos/350/200" />
        <animated.img style={{opacity: opacity.interpolate(t => `${t} rotateX(180deg)`), transform}} className="card-img" src="https://picsum.photos/350/200" />
      </div>
    </div>
  );
}
