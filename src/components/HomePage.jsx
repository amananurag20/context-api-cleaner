import { useContext } from "react";
import { ColorContext } from "../context/colorContext";
import { ThemeContext } from "../context/themeContext";

const HomePage = () => {
  const { color } = useContext(ColorContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        fontSize: "50px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "red",
      }}
    >
      <p style={{ backgroundColor: "green" }}>
        Implementation of context api in more cleaner way
      </p>
      <div>HomePage- {color}</div>

      <div>currentTheme- {theme}</div>
    </div>
  );
};

export default HomePage;
