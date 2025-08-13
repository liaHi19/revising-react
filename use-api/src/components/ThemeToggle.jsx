import { use } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-5 right-5 p-3 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
