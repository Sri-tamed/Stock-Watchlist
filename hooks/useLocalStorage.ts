
// FIX: The type annotation `React.Dispatch` on line 6 requires the `React` namespace, which was not imported.
import React, { useState, useEffect } from 'react';

// A custom hook for using localStorage with React state.
// It synchronizes state with localStorage so it persists across page reloads.
export const useLocalStorage = <T,>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  // Get initial value from local storage or use the provided initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === 'function'
          ? storedValue(storedValue)
          : storedValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
