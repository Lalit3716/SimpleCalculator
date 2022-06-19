import React, { useState, createContext } from "react";

interface Context {
  darkMode: boolean;
  toggleMode: () => void;
}

export const ThemeContext = createContext<Context>({
  darkMode: false,
  toggleMode: () => {},
});

interface Props {
  children: React.ReactNode;
  defaultDarkMode?: boolean;
}

const ThemeProvider: React.FC<Props> = ({ children, defaultDarkMode }) => {
  const [darkMode, setDarkMode] = useState(defaultDarkMode ?? false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
