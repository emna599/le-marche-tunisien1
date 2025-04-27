import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img1 from '../Images/img1.webp';
import img2 from '../Images/img2.webp';
import img3 from '../Images/img3.webp';
import img4 from '../Images/img4.webp';
import img5 from '../Images/img5.webp';

//import centeredImg from '../Images/centeredImg.webp';

//1*******************
import thumb1 from '../Images/thumb1.webp';
import thumb2 from '../Images/thumb2.webp';
import thumb3 from '../Images/thumb3.webp';
import thumb4 from '../Images/thumb4.webp';
import thumb5 from '../Images/thumb5.webp';
import thumb6 from '../Images/thumb6.webp';

const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];

const ThumbnailsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px auto;
  max-width: 90%;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 120px;      /* taille fixe ou ajustable */
  height: 80px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;

  &:hover div {
    opacity: 0.4;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
`;


//********* */

const images = [img1, img2, img3, img4, img5, ];

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(128, 128, 128, 0.5);
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: red;
  }
`;

const LeftArrow = styled(Arrow)`
  left: 20px;
`;

const RightArrow = styled(Arrow)`
  right: 20px;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 5;
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  cursor: pointer;
  transition: background-color 0.3s;
`;
//*************** */
/*
const CenteredImage = styled.img`
  display: block;
  margin: 40px auto;
  max-width: 40%;
  height: auto;
  border-radius: 10px;
`;


//******************* */
function Body() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <CarouselContainer>
        {images.map((image, index) => (
          <Slide key={index} src={image} alt={`Slide ${index}`} active={index === currentIndex} />
        ))}
        <LeftArrow onClick={goToPrev}>&lt;</LeftArrow>
        <RightArrow onClick={goToNext}>&gt;</RightArrow>
        <DotsContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      </CarouselContainer>
  
      

<ThumbnailsContainer>
  {thumbnails.map((thumb, index) => (
    <ThumbnailWrapper key={index}>
      <ThumbnailImage src={thumb} alt={`Thumbnail ${index + 1}`} />
      <Overlay />
    </ThumbnailWrapper>
  ))}
</ThumbnailsContainer>


    </>
  );
  
}

export default Body;
