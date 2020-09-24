import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function TutFade() {
//   const fade = useSpring({
//     from: {
//       opacity: 0,
//     },
//     to: {
//       opacity: 1,
//     },
//   });
//The second object is always the to object!
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  console.log(fade);

  return (
    <>
      <animated.div>Hi</animated.div>
    </>
  );
}
