import React from 'react';
import './Experience.css';
import SliderContent from '../SliderContent';

const workSlides = [
    {  title: "Soneil Electronics", text: "Working in the field of EV Charging, developing new products and managing full stack development of it. Created OCPP Protocol between charger and server." },
    {  title: "Zeus Learning PVT. LTD.", text: "Worked here for 3 years in the field of E-Learning. AS a senior software developer, I handled team of four other people to meet client deadlines. When I was a junior developer here I did mosof my work in Frontend Development in JavaScript, TypeScript, HTML, CSS." },
    {  title: "Softvan PVT. LTD.", text: "I did my internship here when I was doing my engineering. I learned Java Concepts here. Did many web applications in spring boot and hibernet." },
  ];

class Experience extends React.Component {
    render() {
      return (
        <div id="Page-3" className="section fp-section fp-table fp-section-2"  data-anchor="reile" style={{height: '760px'}}>
            <div className="fp-tableCell" style={{height: '760px'}}>
                <div className="experience_page_slide">
                    <div className="experience_title">
                        <h2 className="title__text js-letter">Experience</h2>
                    </div>
                    <SliderContent slides = {workSlides}></SliderContent>
                    {/* <a className="image image--works" href="/reile.html" style={{transform: 'scale(1) translateX(0%) translateZ(0px)'}}>
                        <div className="image__over">
                            <div className="image__cover" style={{transform: 'translateX(110%) translateZ(0px)'}} />
                            <div className="image__cover" style={{transform: 'translateX(110%) translateZ(0px)'}} />
                        </div>
                        <div className="page-num">
                            <p style={{transform: 'translateY(0%) translateZ(0px)'}}>01</p>
                        </div>
                    </a> */}
                </div>
            </div>
        </div>
      );
    }
  }
  export default Experience;

  /* WATCH THIS VIDEO
  https://www.youtube.com/watch?v=DgVjEo3OGBI
   */
