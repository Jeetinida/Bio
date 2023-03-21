import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
    render() {
      return (
        <div id="Page-2" className="section fp-section fp-table fp-section-2"  data-anchor="reile" style={{height: '760px'}}>
            <div className="fp-tableCell" style={{height: '760px'}}>
                <div className="fullpage__slide">
                    <div className="title_page2">
                        <h2 className="title__text js-letter" style={{transform: 'translateX(0%) translateZ(0px)'}}>About Me</h2>
                        <div className="border js-letter" style={{transform: 'translateX(0%) translateZ(0px)'}}><span /><span className="js-letter" style={{transform: 'translateX(0%) translateZ(0px)'}} /></div>
                        <p className="title__lead js-letter" style={{transform: 'translateX(0%) translateZ(0px)'}}>website</p>
                        <div className="btn-wrap js-letter" style={{transform: 'translateX(0%) translateZ(0px)'}}>My name is Jeet. I am from Ahmedabad, India. I am passionate about new technologies and languages. Apart from that, I love playing different sports like Cricket, Table-Tennis, and Tennis. In my free time, I just like to sit down and read a book with my coffee :).</div>
                    </div>
                    <a className="image image--works" href="/reile.html" style={{transform: 'scale(1) translateX(0%) translateZ(0px)'}}>
                        <div className="image__over">
                            <div className="image__cover" style={{transform: 'translateX(110%) translateZ(0px)'}} />
                            <div className="image__cover" style={{transform: 'translateX(110%) translateZ(0px)'}} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
      );
    }
  }
  export default AboutMe;
