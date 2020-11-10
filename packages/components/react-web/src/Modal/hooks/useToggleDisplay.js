import { useState } from 'react';

const useToggleDisplay = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleDisplay = () => {
    setIsDisplayed((currIsDisplayed) => !currIsDisplayed);
  };

  return [isDisplayed, toggleDisplay];
};

export default useToggleDisplay;
