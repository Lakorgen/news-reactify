import { useTheme } from "@/app/providers/ThemeProvider";
import { themeIcon } from "@/shared/assets";

const ThemeButton = () => {
    const { isDark, toggleTheme } = useTheme();
  
  return (
    <img
      src={isDark ? themeIcon.light : themeIcon.dark}
      width={30}
      height={30}
      alt=""
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
