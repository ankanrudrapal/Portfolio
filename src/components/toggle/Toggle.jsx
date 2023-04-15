import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleCLick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <img src={Moon} alt="" className="t-icon" />
      <img src={Sun} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleCLick}
        style={{ left: theme.state.darkMode ? 25 : 0 }}
      ></div>
    </div>
  );
};

export default Toggle;
