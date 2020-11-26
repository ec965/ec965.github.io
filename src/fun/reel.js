import React, {useState, useEffect} from 'react';
import {Figure, Video} from '../projects/page';
import {CSSTransition} from 'react-transition-group';

export default function Reel(props){
  const [slideIndex, setSlideIndex] = useState(0);
  const [lastSlide, setLastSlide] = useState(false);
  const [firstSlide, setFirstSlide] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const {slides} = props;
  
  const transistion_time = 500;

  useEffect(()=> {
    if(slideIndex === 0 ){
      setFirstSlide(true);
    }
    else{
      setFirstSlide(false);
    }
    if(slideIndex === slides.length-1){
      setLastSlide(true);
    }
    else{
      setLastSlide(false);
    }
  }, [slideIndex, slides.length]);

  function handlePrev(){
    if (slideIndex > 0){
      setFadeIn(true);
      setSlideIndex(slideIndex-1);
      setTimeout(()=>{setFadeIn(false);},transistion_time);
    }
  }
  function handleNext(){
    if (slideIndex < slides.length-1){
      setFadeIn(true);
      setSlideIndex(slideIndex+1);
      setTimeout(()=>{setFadeIn(false);},transistion_time);
    }
  }
  return(
    <div className="slide-player">
      <div className="slide-control">
        {!firstSlide && (
          <i onClick={handlePrev} className="slide-button fas fa-caret-left"></i>
        )}
      </div>
      <CSSTransition 
        in={fadeIn} 
        timeout={transistion_time} 
        classNames={"slide-node"}
      >
        <div>
          <Figure caption={slides[slideIndex].caption}>
            {slides[slideIndex].type === 'image' && (
              <img src={slides[slideIndex].media} alt={slides[slideIndex].alt} className="slide-image"/>
            )}
            {slides[slideIndex].type === 'video' && (
              <Video className="slide-video" youtube vidsrc={slides[slideIndex].media}/>
            )}
          </Figure>
        </div>
      </CSSTransition>
      <div className="slide-control">
        {!lastSlide && (
          <i onClick={handleNext} className="slide-button fas fa-caret-right"></i>
        )}
      </div>
    </div>
  );
}