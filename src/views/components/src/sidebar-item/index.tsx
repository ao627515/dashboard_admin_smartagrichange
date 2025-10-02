import React, { useState } from "react";

type SidebarItemProps = {
  icon: React.ReactNode;
  text: string;
};

function SidebarItem({ icon, text }: SidebarItemProps) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      className={`sac_sidebar__item ${
        active ? "sac_sidebar__item--active" : ""
      }`}
      onClick={handleClick}
    >
      <div className="sac_sidebar__item__indicator" />
      <div className="sac_sidebar__item__content">
        <div className="sac_sidebar__item__icon">{icon}</div>
        <div className="sac_sidebar__item__text">{text}</div>
      </div>
    </div>
  );
}

export default SidebarItem;
