import React from "react";
import { LogoIcon } from "../../../../assets/illlustrations/src/logoIcon";
import { SidebarItem } from "../../index";
import { LayoutDashboard } from "lucide-react";

function Sidebar() {
  return (
    <aside className="sac_sidebar">
      <div className="sac_sidebar__logo_container">
        <LogoIcon />
      </div>
      <div className="sac_sidebar__items_container">
        <SidebarItem icon={<LayoutDashboard />} text="Dashboard" />
      </div>
    </aside>
  );
}

export default Sidebar;
