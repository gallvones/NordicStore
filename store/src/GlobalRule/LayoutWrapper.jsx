// src/components/LayoutWrapper.jsx
import React, { useEffect, useState } from 'react';
import ScreenWarning from '../Components/ScreenWarning/ScreenWarning';

const LayoutWrapper = ({ children }) => {
  const [isTooSmall, setIsTooSmall] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsTooSmall(window.innerWidth <= 1000);
    checkSize(); // check inicial
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (isTooSmall) return <ScreenWarning />;
  return <>{children}</>;
};

export default LayoutWrapper;
