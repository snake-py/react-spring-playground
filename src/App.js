import React from 'react';
import Fade from './components/useSprings/Fade';
import Container from './components/Container';
function App() {
  return (
    <div className="App">
      <div id="main-heading-div">
        <h1 >React - Spring - Playground</h1>
      </div>
      <Container componentToRender={<Fade />}></Container>
    </div>
  );
}

export default App;
