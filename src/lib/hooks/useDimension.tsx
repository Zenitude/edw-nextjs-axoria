"use client";

import { useState, useEffect } from "react";

export default function useDimension() {
  const [dimension, setDimension] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setDimension(window.innerWidth);
      };

      setDimension(window.innerWidth);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  
  return dimension;
}
