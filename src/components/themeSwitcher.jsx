import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


export default function ThemeSwitcher () {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <button
      onClick={toggleTheme}
      className="inline fixed top-4 lg:top-8 right-20 lg:right-8 px-4 py-2 bg-green-900 bg-opacity-80 dark:bg-blue-200 text-gray-200 dark:text-gray-800 rounded-md transition justify-end"
    >
      Change to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};