import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollX: number;
}

export const useScrollPosition = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollX: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;