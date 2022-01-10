import Style from "./Header.module.scss";
import CustomMenuBurgerIcon from "../Icons/CustomMenuBurgerIcon/CustomMenuBurgerIcon";
import CustomSettingsIcon from "../Icons/CustomSettingsIcon/CustomSettingsIcon";
import Link from "next/link";
export default function Header() {
  return (
    <header className={Style.Header}>
      {/* Mobile Components */}
      <CustomMenuBurgerIcon className={Style.Header_MenuBurgerIcon} />

      <h1 className={Style.Header_title}>
        Cronómetro Online - Reloj-Alarma-Clone.es
      </h1>
      {/* Mobile Components */}

      {/* Desktop  Components*/}
      <h2 className={Style.Header_logo}>Reloj-Alarma-Clone.es</h2>
      <Link href={""}>
        <a className={Style.Header_days}>Días festivos</a>
      </Link>
      {/* Desktop  Components*/}

      {/* Global Components */}
      <CustomSettingsIcon />
      {/* Global Components */}
    </header>
  );
}
