import React, { useState } from 'react';

const GridItem: React.FC<{
  title: string;
  description: string;
  src: string;
  alt: string;
  actors: string[];
  trailerUrl: string;
}> = ({ title, description, src, alt, actors, trailerUrl }) => {
  const [isClickedOn, setIsClickedOn] = useState(false);

  const containerStyle: React.CSSProperties = {
    width: '300px',
    height: '500px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden', // Hide overflow to make sure the image stays contained
  };

  const imageStyle: React.CSSProperties = {
    height: '100%',
    width: '100%',
    objectFit: 'cover', // This property maintains aspect ratio and covers the container
    borderRadius: '2em',
    transition: 'transform 0.4s', // Add a smooth transition for zoom effect
    transform: isClickedOn ? 'scale(1.1)' : 'scale(1)', // Zoom in on click
    transformOrigin: 'top left', // Corrected value with quotation marks
  };
  

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1rem',
    borderRadius: '2em 0 0 0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black background
    color: 'white', // Text color
    opacity: isClickedOn ? 1 : 0, // Show/hide on click
    transition: 'opacity 0.4s', // Fade-in/out effect
  };

  return (
    <div
      style={containerStyle}
      onClick={() => setIsClickedOn(!isClickedOn)}
    >
      <img src={src} alt={alt} style={imageStyle} />
      <div style={overlayStyle}>
        <h1>{title}</h1>
        <div>
          <p>{description}</p>
          <p>Actors: {actors.join(', ')}</p>
          <button onClick={() => window.open(trailerUrl, '_blank')}>Check out the trailer</button>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
