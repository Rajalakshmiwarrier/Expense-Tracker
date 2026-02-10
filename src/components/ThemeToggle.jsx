import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
   <div className={ `toggle ${theme === 'dark' ? 'dark' : ''}` }
   onClick={toggleTheme}
   role="button"
   aria-label="Toggle theme"
   >
    <div className="toggle-thumb">
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
      
   </div>
  );
}

export default ThemeToggle;
