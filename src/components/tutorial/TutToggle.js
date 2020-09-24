import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function TutToggle() {
  const [isToggled, setToggler] = useState(false);
  const fade = useSpring({
    // opacity: isToggled ? 1 : 0,
    color: isToggled ? '#000' : 'green', // can animate from and to color name, hsl, rgb, gradients, hex
    // fontSize: isToggled ? '2rem' : '20em' // not working here due to css
    transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0, -50px,0)',

    // if no from and no to prop is set, then the set prop will always be the to.
    // But in if used like this -> one value will be the start value and the other will be the end value
  });
  return (
    <>
      <div>
        <animated.h1 style={fade}>Hello</animated.h1>
        <button onClick={() => setToggler(!isToggled)}>Toggle</button>
      </div>
    </>
  );
}
