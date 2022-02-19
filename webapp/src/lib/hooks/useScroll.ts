import { useEffect, useState } from 'react';

export interface Scroll {
  scrollY: number;
  scrollActive?: boolean;
}

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    let currentPosition = window.pageYOffset;

    if (currentPosition > scrollY) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }

    setScrollY(currentPosition <= 0 ? 0 : currentPosition);
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    }
    scrollListener();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return { scrollY, scrollActive };
}
