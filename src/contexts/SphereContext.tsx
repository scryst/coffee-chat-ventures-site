"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the type for sphere positions
type SpherePosition = {
  x: number;
  y: number;
};

// Define the context type
type SphereContextType = {
  spherePositions: SpherePosition[];
  updateSpherePosition: (index: number, position: SpherePosition) => void;
};

// Create the context with a default value
const SphereContext = createContext<SphereContextType>({
  spherePositions: [
    { x: -40, y: -10 },  // Top sphere
    { x: -40, y: 25 },   // Middle sphere
    { x: 25, y: -40 }    // Bottom sphere
  ],
  updateSpherePosition: () => {},
});

// Custom hook to use the sphere context
export const useSphereContext = () => useContext(SphereContext);

// Provider component
export const SphereProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [spherePositions, setSpherePositions] = useState<SpherePosition[]>([
    { x: -40, y: -10 },  // Top sphere
    { x: -40, y: 25 },   // Middle sphere
    { x: 25, y: -40 }    // Bottom sphere
  ]);

  // Load positions from localStorage on mount
  useEffect(() => {
    const savedPositions = localStorage.getItem('spherePositions');
    if (savedPositions) {
      setSpherePositions(JSON.parse(savedPositions));
    }
  }, []);

  // Save positions to localStorage when they change
  useEffect(() => {
    localStorage.setItem('spherePositions', JSON.stringify(spherePositions));
  }, [spherePositions]);

  // Function to update a specific sphere's position
  const updateSpherePosition = (index: number, position: SpherePosition) => {
    setSpherePositions(prev => {
      const newPositions = [...prev];
      newPositions[index] = position;
      return newPositions;
    });
  };

  return (
    <SphereContext.Provider value={{ spherePositions, updateSpherePosition }}>
      {children}
    </SphereContext.Provider>
  );
};
