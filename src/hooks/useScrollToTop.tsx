import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current && ref.current.scrollIntoView();
  }, [pathname]);

  return ref;
};

export default useScrollToTop;
