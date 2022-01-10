import Style from "./Header.module.scss";
import CustomMenuBurgerIcon from "../Icons/CustomMenuBurgerIcon/CustomMenuBurgerIcon";
import CustomSettingsIcon from "../Icons/CustomSettingsIcon/CustomSettingsIcon";
export default function Header() {
  return (
    <header className={Style.Header}>
      {/* Mobile Components */}
      <CustomMenuBurgerIcon />

      <h1 className={Style.Header_title}>
        Cronómetro Online - Reloj-Alarma-Clone.es
      </h1>
      {/* Mobile Components */}

      {/* Desktop  Components*/}
      <h2>Reloj-Alarma-Clone.es</h2>
      <h3>Días festivos</h3>
      {/* Desktop  Components*/}

      {/* Global Components */}
      <CustomSettingsIcon />
      {/* Global Components */}
    </header>
  );
}
