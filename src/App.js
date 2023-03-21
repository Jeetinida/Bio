
import './App.css';
import Header from './components/Header'
import Moon from './components/Moon'
import AboutMe from './components/AboutMe'
import React, { useEffect } from 'react';
import * as sections from './Enums/Index.enum';
import Experience from './components/Experience/Experience';
import Contact from './components/contact/contact';

function App() {

  var currentIndex = 0;
  var slides = ['Page-1', 'Page-2', 'Page-3', 'Page-4'];

  useEffect(() => {
    // subscribe event
    window.addEventListener("wheel", onMouseWheel, { passive: false });
    return () => {
      // unsubscribe event
      window.removeEventListener("wheel", onMouseWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMouseWheel = (e) => {
    if (e.wheelDelta < 0 && currentIndex !== sections.sectionIndex.LAST_INDEX) {
      document.getElementById(slides[currentIndex + 1]).scrollIntoView({behavior: 'smooth'});
      currentIndex++;
    } else if (e.wheelDelta > 0 && currentIndex !== sections.sectionIndex.FIRST_INDEX) {
      document.getElementById(slides[currentIndex - 1]).scrollIntoView({behavior: 'smooth'});
      currentIndex--;
    }

    e.preventDefault();
  }

  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Moon></Moon>
      <Experience></Experience>
      <Contact></Contact>
      <div className = "sky-color"></div>
    </div>
  );
}

export default App;
