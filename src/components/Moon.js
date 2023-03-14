import React from 'react';
import './Moon.css';

class Moon extends React.Component {
    render() {
      return (
        <div className="moon-background">
            <div className="moonlight">
                <div className="moonlight__wrap js-parallax-moonlight" style={{transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'relative', pointerEvents: 'none'}}>
                    <div className="layer moonlight__img" data-depth="0.2" style={{transform: 'translate3d(4px, 3.6px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'relative', display: 'block', left: '0px', top: '0px'}} />
                </div>
            </div>
        </div>
      );
    }
  }
  export default Moon;
