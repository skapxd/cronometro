import Style from "./CustomMenuBurgerIcon.module.scss";

interface CustomMenuBurgerIconInterface {
  className?: string;
  onClick?: () => void;
}

export default function CustomMenuBurgerIcon(
  props: CustomMenuBurgerIconInterface
) {
  const {
    className = "",
    onClick = () => console.log("Default onClick CustomMenuBurgerIcon"),
  } = props;

  return (
    <div
      className={`${Style.MenuBurgerIcon} ${className}`}
      onClick={() => onClick && onClick()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
