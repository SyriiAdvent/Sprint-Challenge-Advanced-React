import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(`Couldnt retrieve a key: `, error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueStoring =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueStoring);
      localStorage.setItem(key, JSON.stringify(valueStoring));
    } catch (error) {
      console.log(`Error storing key: `, error);
    }
  };

  return [storedValue, setValue];
};
