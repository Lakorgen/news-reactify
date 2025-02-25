import { useTheme } from "@/app/providers/ThemeProvider";
import { Header } from "@/widges/header";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
