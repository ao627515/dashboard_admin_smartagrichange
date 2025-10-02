import React from "react";
import { LogoIcon } from "../../../../assets/illlustrations/src/logoIcon";
import { SidebarItem } from "../../index";
import {
  LayoutDashboard,
  Users,
  User,
  Activity,
  CreditCard,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sac_sidebar">
      <div className="sac_sidebar__logo_container">
        <LogoIcon />
      </div>
      <div className="sac_sidebar__items_container">
        <SidebarItem icon={<LayoutDashboard />} text="Dashboard" />
        <SidebarItem icon={<Users />} text="Administrateurs" />
        <SidebarItem icon={<User />} text="Utilisateurs" />
        <SidebarItem icon={<Activity />} text="Capteurs" />
        <SidebarItem icon={<CreditCard />} text="Abonnement" />
        <SidebarItem icon={<LogOut color="red" />} text="Déconnexion" />
      </div>
    </aside>
  );
}

export default Sidebar;
