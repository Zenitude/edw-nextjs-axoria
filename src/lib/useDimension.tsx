"use client";

import { useState, useEffect } from "react";

export default function useDimension() {
  const [dimension, setDimension] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDimension(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  
  return dimension;
}
