import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopOnNavigation;

