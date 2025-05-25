import { useState, useEffect } from 'react';

function useIntersectionObserver(
  elementRef,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  } = {}
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isVisible !== isIntersecting) {
          setIsVisible(isIntersecting);
        }
        
        if (freezeOnceVisible && isIntersecting && element) {
          observer.unobserve(element);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, isVisible]);

  return isVisible;
}

export default useIntersectionObserver;