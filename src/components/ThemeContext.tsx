
import { createContext, useContext, useEffect, useState, useMemo, ReactNode } from 'react';

// 1. Define types for our theme states
export type Theme = 'light' | 'dark' | 'system';

// 2. Define the shape of our context value
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// 3. Create the context with a default undefined value initially,
//    but explicitly type it for what it will eventually hold.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define props for ThemeProvider
interface ThemeProviderProps {
  children: ReactNode; // ReactNode covers JSX elements, strings, etc.
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if window is defined (for SSR safety)
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
        return storedTheme;
      }
      // Default to system preference if no stored theme
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Default for non-browser environments
  });

  // Effect to apply/remove the 'dark' class on the HTML element
  useEffect(() => {
    const root = document.documentElement; // HTML element is always present in browser
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else { // 'system' theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.removeItem('theme'); // Remove specific preference to defer to system
    }
  }, [theme]);

  // Listen for system theme changes (if 'system' is an option or default)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Only re-apply if currently in 'system' mode or no explicit preference set
      if (theme === 'system' || localStorage.getItem('theme') === null) {
        setTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};