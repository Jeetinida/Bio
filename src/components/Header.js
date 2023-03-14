import React from 'react';
import './Header.css';
import cloud1 from '../assets/cloud1.svg';
import cloud2 from '../assets/cloud2.svg';
import cloud3 from '../assets/cloud3.svg';
import white_cloud1 from '../assets/b_cloud01.svg';
import white_cloud from '../assets/b_cloud02.svg';
import moon from '../assets/moon.svg';

class Header extends React.Component {

    _onMouseMove(e) {
        const elements_front = Array.from(document.getElementsByClassName("moon__front"));
        const elements_back = Array.from(document.getElementsByClassName("moon__back"));
        Array.prototype.push.apply(elements_front, elements_back);
        var moveX = (e.screenX - 767.5)/36.54;
        var moveY = (e.screenY - 415.5)/19.42;
        elements_front.map(element=>{
          element.style.transform = 'translate3d(' + moveX + 'px, ' + moveY + 'px, 0px)';
      });
    }


    render() {
      return (
        <div id="Page-1" onMouseMove={this._onMouseMove.bind(this)} className="section fp-section fp-table fp-section-1 active fp-completely" data-anchor="top" style={{height: '760px'}}>
            <div className="fp-tableCell" style={{height: '760px'}}>
              <div className="fullpage__slide">
                  <div className="title title--top">
                  <h1 className="title__text js-letter" style={{transform: 'translateX(0%) translateZ(0px)'}}>JEET<br />VYAS</h1>
                  <div className="border js-letter" style={{transform: 'translateX(0%) translateZ(0px)'}}><span /><span className="js-letter" style={{transform: 'translateX(0%) translateZ(0px)'}} /></div>
                  <p className="title__lead js-letter" style={{transform: 'translateX(0%) translateZ(0px)'}}>Software Developer /<br />Machine Learning engineer.</p>
                  </div>
                  <div className="moon">
                  <div className="moon__img js-parallax-moon" style={{transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', pointerEvents: 'none'}}>
                      <div className="moon__front layer" data-depth="0.2" style={{transform: 'translate3d(-3px, 2.1px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'relative', display: 'block', left: '0px', top: '0px'}}>
                      <div className="moon__text-wrap">
                          <p className="moon__text js-moon" data-depth="0.5" style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}}>PORTFOLIO</p>
                      </div>
                      </div>
                      <div className="moon__front layer" data-depth="0.8" style={{transform: 'translate3d(-11.9px, 8.3px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: '0px', top: '0px'}}>
                      <div className="cloud cloud--front1 js-moon" style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}}><img src={cloud1} alt="cloud" /></div>
                      </div>
                      <div className="moon__back layer" data-depth="0.4" style={{transform: 'translate3d(-5.9px, 4.1px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: '0px', top: '0px'}}>
                      <div className="cloud cloud--back2 js-moon" style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}}><img src={white_cloud} alt="cloud" /></div>
                      </div>
                      <div className="moon__front layer" data-depth="0.6" style={{transform: 'translate3d(-8.9px, 6.2px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: '0px', top: '0px'}}>
                      <div className="cloud cloud--front2 js-moon" style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}}><img src={cloud2} alt="cloud" /></div>
                      </div>
                      <div className="moon__back layer" data-depth="0.5" style={{transform: 'translate3d(-7.4px, 5.2px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: '0px', top: '0px'}}><img className="js-moon" src={moon} alt="moon" style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}} /></div>
                      <div className="moon__front layer" data-depth="0.7" style={{transform: 'translate3d(-10.4px, 7.3px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: '0px', top: '0px'}}>
                      <div className="cloud cloud--front3 js-moon" style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}}><img src={cloud3} alt="cloud" /></div>
                      </div>
                      <div className="moon__back layer" data-depth="0.3" style={{transform: 'translate3d(-4.5px, 3.1px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: '0px', top: '0px'}}>
                      <div className="cloud cloud--back1 js-moon" style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}}><img src={white_cloud1} alt="cloud" /></div>
                      </div>
                  </div>
                  </div>
              </div>
            </div>
            <a href="#reile"></a>
        </div>
        
      );
    }
  }
  export default Header;