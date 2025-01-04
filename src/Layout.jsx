import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/theme";

const Layout = () => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
