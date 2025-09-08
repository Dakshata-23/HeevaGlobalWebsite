
const FRAME_COUNT = 74;
const FRAME_PATH = '/ezgif-split/ezgif-frame-';
const FRAME_PAD = 3;
const SCROLL_PER_FRAME = 50; // Reduced for shorter scroll distance
import React, { useEffect, useRef, useState } from 'react';

function pad(num: number, size: number) {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}

const getFrameSrc = (index: number) => {
  return `${FRAME_PATH}${pad(index, FRAME_PAD)}.jpg`;
};

interface ScrollVideoProps {
  sectionMode?: boolean;
  onEnd?: () => void;
  onActiveChange?: (active: boolean) => void;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({ sectionMode, onEnd, onActiveChange }) => {
  const [frame, setFrame] = useState(1);
  const [ended, setEnded] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fade out video and overlay/text only on last 5% of frames
  const fadeStart = Math.floor(FRAME_COUNT * 0.95);
  const fadeEnd = FRAME_COUNT;
  let fade = 1;
  if (frame >= fadeStart) {
    fade = 1 - (frame - fadeStart) / (fadeEnd - fadeStart);
    if (fade < 0) fade = 0;
  }

  useEffect(() => {
    if (sectionMode) {
      const scrollLength = window.innerHeight * 1.2;
      const handleScroll = () => {
        if (!containerRef.current) return;
        const scrollTop = window.scrollY;
        const percent = Math.min(1, Math.max(0, scrollTop / scrollLength));
        const newFrame = Math.round(percent * (FRAME_COUNT - 1)) + 1;
        setFrame(newFrame);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      const scrollLength = (FRAME_COUNT - 1) * SCROLL_PER_FRAME;
      const handleScroll = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const active = rect.top < windowHeight && rect.bottom > 0;
        setIsActive(active);
        if (typeof onActiveChange === 'function') onActiveChange(active);
        
        const scrollTop = window.scrollY;
        const sectionTop = containerRef.current.offsetTop;
        const relativeScroll = scrollTop - sectionTop;
        
        // Ensure smooth progression from frame 1 to 74
        const percent = Math.min(1, Math.max(0, relativeScroll / scrollLength));
        const newFrame = Math.max(1, Math.min(FRAME_COUNT, Math.round(percent * (FRAME_COUNT - 1)) + 1));
        
        setFrame(newFrame);
        if (newFrame === FRAME_COUNT && !ended) {
          setEnded(true);
          if (onEnd) onEnd();
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [sectionMode, ended, onEnd, onActiveChange]);

  // For full-page intro, set a tall container to enable scrolling through frames
  if (!sectionMode) {
    return (
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100vw',
          height: `${(FRAME_COUNT - 1) * SCROLL_PER_FRAME + window.innerHeight * 0.5}px`, // Reduced height
          zIndex: 10,
          overflow: 'hidden',
        }}
      >
        {isActive && (
          <>
            {/* Video frame with fade-out */}
            <img
              src={getFrameSrc(frame)}
              alt={`Frame ${frame}`}
              style={{
                width: '100vw',
                height: '100vh',
                objectFit: 'cover',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 10,
                userSelect: 'none',
                pointerEvents: 'none',
                display: 'block',
                opacity: fade,
                transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
              draggable={false}
            />
            {/* Overlay with fade-out */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.5)',
                pointerEvents: 'none',
                zIndex: 11,
                opacity: fade,
                transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            />
            {/* Hero text and scroll indicator with fade-out */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'none',
                opacity: fade,
                transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{pointerEvents: 'auto'}}>
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                    We have reinvented the future of logistics
                  </h1>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                    through the yard.
                  </h2>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-terminal-gray mt-12">
                    Moving the world by making goods flow.
                  </h3>
                </div>
              </div>
              {/* Scroll Indicator */}
              <div className="pb-8 flex flex-col items-center" style={{pointerEvents: 'auto'}}>
                <button
                  onClick={() => {
                    const element = document.getElementById("explore");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group flex flex-col items-center space-y-2 text-terminal-gray hover:text-terminal-green transition-terminal mt-10"
                >
                  <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
              </div>
            </div>
            {/* Debug overlay: shows current frame */}
            <div
              style={{
                position: 'fixed',
                top: 10,
                left: 10,
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: 4,
                zIndex: 1000,
                fontSize: 16,
              }}
            >
              Frame: {frame}
            </div>
          </>
        )}
      </div>
    );
  }

  // ...existing code for sectionMode...
  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }} ref={containerRef}>
      <img
        src={getFrameSrc(frame)}
        alt={`Frame ${frame}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          userSelect: 'none',
        }}
        draggable={false}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default ScrollVideo;
        