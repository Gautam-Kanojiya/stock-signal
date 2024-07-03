import { useEffect, useState } from 'react';

const useTypedText = (strings, typeSpeed, backSpeed, backDelay) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === strings[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), backDelay);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = isDeleting ? backSpeed : typeSpeed;

    const timeoutId = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [subIndex, isDeleting, strings, index, backSpeed, typeSpeed, backDelay]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return `${strings[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};

export default useTypedText;
