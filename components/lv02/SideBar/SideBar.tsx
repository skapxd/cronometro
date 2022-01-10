import Style from "./SideBar.module.scss";

interface SideBarInterface {
  className?: string;
}

export default function SideBar(props: SideBarInterface) {
  const { className = "" } = props;
  return (
    <div className={`${Style.SideBar} ${className}`}>
      <p>sidebar</p>
    </div>
  );
}
