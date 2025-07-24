import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './ThemeContext.tsx';
import type { Theme } from './ThemeContext.tsx';
import { FiMonitor } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(nextTheme);
  };

  const renderIcon = (currentTheme: Theme) => {
    switch (currentTheme) {
      case 'light':
        return <FaSun className="w-5 h-5" />;
      case 'dark':
        return <FaMoon className="w-5 h-5" />;
      case 'system':
        return <FiMonitor className="w-5 h-5" />;
      default:
        return <FaSun className="w-5 h-5" />;
    }
  };

  const getAccessibilityText = (currentTheme: Theme) => {
    switch (currentTheme) {
      case 'light':
        return 'Current theme: Light. Click to switch to Dark mode.';
      case 'dark':
        return 'Current theme: Dark. Click to switch to System mode.';
      case 'system':
        return 'Current theme: System. Click to switch to Light mode.';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-300"
      aria-label={getAccessibilityText(theme)}
      title={getAccessibilityText(theme)}
    >
      {renderIcon(theme)}
    </button>
  );
};

export default ThemeToggle;
