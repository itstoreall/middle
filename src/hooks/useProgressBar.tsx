/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

const useProgressBar = (percent: number) => {
  const [width, setWidth] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);

  const interval = useRef<number | null>(null);

  const handler = (isWidth: boolean, percent: number) => {
    let value = width;
    interval.current = window.setInterval(() => {
      value += Math.floor(Math.random() * 10) + 1;
      if (value >= percent) {
        interval.current !== null && clearInterval(interval.current);
        isWidth && handler(false, percent);
        value = percent;
      }
      isWidth ? setWidth(value) : setCounter(value);
    }, 30);
  };

  useEffect(() => handler(true, percent), []);

  return { width, counter };
};

export default useProgressBar;
