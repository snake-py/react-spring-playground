import React from 'react';
import Fade from './components/useSprings/Fade';
import Container from './components/Container';
import { useSpring, animated } from 'react-spring';
import FlipCard from './components/useSprings/FlipCard';

function App() {
  const animationProps = useSpring({ to: { transform: 'translate3d(0,0px,0)', opacity: 1 }, from: { transform: 'translate3d(-0px,-15px,0)', opacity: 0 }, config: { duration: 300 } });
  return (
    <div className="App">
      <div id="main-heading-div">
        <animated.h1 style={animationProps}>React - Spring - Playground</animated.h1>
      </div>
      <Container componentToRender={<Fade />}></Container>
      <Container componentToRender={<FlipCard />}></Container>
    </div>
  );
}

export default App;
