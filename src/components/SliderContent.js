import React from 'react';
import './SliderContent.css';
import { useState, useEffect  } from "react";


const sliderStyles = {
    position: "relative",
    height: "100%",
    transition: 'left 5s',
};

const SliderContent = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
          start()
      }, [])

    const start = () => {
        setInterval(() => {
            setCurrentIndex(currentIndex => {
            if (currentIndex + 1 === slides.length) {
              return 0
            }
            return currentIndex + 1
          })
        }, 4000)
      }

    const stop = () => {
      // clearInterval(intervalId.current)
    }
      return (
        <div style={sliderStyles}>
            <div className='slider-style-class'>
                <div className='slider-show'>
                    <div className='slider-title'>
                        {slides[currentIndex].title}
                    </div>
                    <div className='slider-text'>
                        {slides[currentIndex].text}
                    </div>
                </div>
            </div>
            
        </div>
      );

    
  };
  export default SliderContent;
