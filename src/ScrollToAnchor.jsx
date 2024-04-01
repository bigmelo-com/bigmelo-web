import { useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useLayoutEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      document
        .getElementById(lastHash.current)
        ?.scrollIntoView({ behavior: 'instant', block: 'start' });
      lastHash.current = '';
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
