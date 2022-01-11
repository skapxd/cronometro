import Style from "./Header.module.scss";
import CustomMenuBurgerIcon from "../../lv01/Icons/CustomMenuBurgerIcon/CustomMenuBurgerIcon";
import CustomSettingsIcon from "../../lv01/Icons/CustomSettingsIcon/CustomSettingsIcon";
import Link from "next/link";

interface HeaderInterface {
  className?: string;
}

export default function Header(props: HeaderInterface) {
  const { className = "" } = props;

  return (
    <header className={`${Style.Header} ${className}`}>
      {/* Mobile Components */}
      <CustomMenuBurgerIcon className={Style.Header_MenuBurgerIcon} />

      <h1 className={Style.Header_title}>
        Cronómetro Online - Reloj-Alarma-Clone.es
      </h1>
      {/* Mobile Components */}

      {/* Desktop  Components*/}
      <h2 className={Style.Header_logo}>Reloj-Alarma-Clone.es</h2>
      <Link href={"/"}>
        <a className={Style.Header_days}>Días festivos</a>
      </Link>
      {/* Desktop  Components*/}

      {/* Global Components */}
      <CustomSettingsIcon />
      {/* Global Components */}
    </header>
  );
}
