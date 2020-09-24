import React from 'react';

export default function Container(props) {

  return (
    <div className="container">
      <div className="animation-container">
        <div className="animation">{props.componentToRender}</div>
      </div>
    </div>
  );
}
