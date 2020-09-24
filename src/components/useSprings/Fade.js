import React from 'react';
import { useSpring, animated } from 'react-spring';
export default function Fade() {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: {duration: 5000} });
  // const fade = useSpring({ to: { opacity: 1, color: 'red' }, from: { opacity: 0, color: 'black' }, config: { duration: 2000 } });
  return <animated.div style={fade}>I will fade in</animated.div>;
}
