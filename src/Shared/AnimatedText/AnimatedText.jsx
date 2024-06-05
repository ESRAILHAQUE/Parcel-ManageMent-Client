// src/components/AnimatedText.js
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 color:blue;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledH1 = styled.h1`

  font-size: 100px;

 
`;

const AnimatedText = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayedText, setDisplayedText] = useState(text);
  const [isVisible, setIsVisible] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let iteration = 0;
      clearInterval(intervalId);

      const id = setInterval(() => {
        setDisplayedText((prevText) =>
          prevText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(id);
        }

        iteration += 1 / 3;
      }, 40);

      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setDisplayedText(text);
    }

    return () => clearInterval(intervalId);
  }, [isVisible, text]);

  return (
    <Container>
      <StyledH1 ref={textRef} data-value={text}>
        {displayedText}
      </StyledH1>
    </Container>
  );
};

export default AnimatedText;
