import React from 'react';
import useTypedText from './useTypedText';

const AnimatedText = ({ texts, typeSpeed = 100, backSpeed = 80, backDelay = 1000 }) => {
  const animatedText = useTypedText(texts, typeSpeed, backSpeed, backDelay);

  return <span className="role">{animatedText}</span>;
};

export default AnimatedText;
