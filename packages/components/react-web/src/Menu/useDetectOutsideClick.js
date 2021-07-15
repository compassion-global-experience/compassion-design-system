import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e) => {
      if (el.current !== null && e.target.contains(el.current)) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener('click', onClick);
    } else {
      window.removeEventListener('click', onClick);
      setIsActive(false);
    }
  }, [isActive, el]);

  return [isActive, setIsActive];
};
