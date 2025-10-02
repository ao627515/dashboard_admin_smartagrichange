import React, { FC } from "react";
import { titlePage } from "../../../../utils/src/string";
import { Sidebar, Header } from "../../../components";

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ title, children }) => {
  titlePage(title);
  return (
    <div className="sac_app_main_layout">
      <Sidebar />
      <main role="main" className="sac_main">
        <Header />
        <div className="sac_main__content">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
