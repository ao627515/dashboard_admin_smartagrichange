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
    <>
      <Sidebar />
      <main role="main" className="sac_main">
        <Header />
        <div className="content">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
