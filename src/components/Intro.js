import React, { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Intro.css';
import logoPrefeitura from '../assets/logo_prefeitura.png';
import { CurrentComponentContext } from '../CurrentComponentContext';

gsap.registerPlugin(ScrollTrigger);

const Intro = (props) => {
  const { setCurrentComponent } = useContext(CurrentComponentContext);
  const { currentComponent } = useContext(CurrentComponentContext);
  const containerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setCurrentComponent('Intro'),
      onEnterBack: () => setCurrentComponent('Intro'),
      onLeave: () => setCurrentComponent(''),
      onLeaveBack: () => setCurrentComponent(''),
    });
  }, [setCurrentComponent]);

  const videoRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const videos = videoRefs.current;
    const texts = textRefs.current;

    videos.forEach((video, index) => {
      gsap.fromTo(
        video,
        { opacity: index === 0 ? 1 : 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: texts[index],
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {
              video.play().catch((error) => {
                if (error.name !== 'AbortError') {
                  console.error('Error playing video:', error);
                }
              });
            },
            onEnterBack: () => {
              video.play().catch((error) => {
                if (error.name !== 'AbortError') {
                  console.error('Error playing video:', error);
                }
              });
            },
            onLeave: () => {
              try {
                video.pause();
              } catch (error) {
                console.error('Error pausing video:', error);
              }
            },
            onLeaveBack: () => {
              try {
                video.pause();
              } catch (error) {
                console.error('Error pausing video:', error);
              }
            },
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

  }, []);

  const videoSources = [
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/1.mp4',
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/2.mp4',
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/3.mp4',
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/4.mp4',
  ];

  return (
    <div {...props} className="intro-container" ref={containerRef}>
      {currentComponent === 'Intro' && (
        <div className="logo-container">
          <img src={logoPrefeitura} alt="Logo" className="logo" />
        </div>
      )}
      <div className="video-container">
        {videoSources.map((src, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            className="background-video"
            src={src}
            loop
            playsInline
            muted
          />
        ))}
      </div>

      {/* Scrolling text cards */}
      <div className="text-section">
        <div className="text-card-intro" ref={(el) => (textRefs.current[0] = el)}>
          <h2>How and where is the future of the world envisioned?
          </h2>
        </div>
        <div className="text-card-intro" ref={(el) => (textRefs.current[1] = el)}>
          <h2>The choices made by global leaders today will shape the face of the Earth for the coming decades. And whose advice do they listen to?</h2>
        </div>
        <div className="text-card-intro" ref={(el) => (textRefs.current[2] = el)}>
          <h2>In 2024, Rio de Janeiro is the host of one of the largest gatherings among nations: the G20, where the world's greatest powers plan the future together with civil society. </h2>
        </div>
        <div className="text-card-intro3" ref={(el) => (textRefs.current[3] = el)}>
          <div>
            <h1>G20 in Data</h1>
            <h2> Discover how the event gives geopolitical prominence to Rio, involves the city, and impacts its global image.</h2>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Intro;