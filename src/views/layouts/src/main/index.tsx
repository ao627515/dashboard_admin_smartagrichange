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
      <Header />
      <Sidebar />
      <main role="main">{children}</main>
    </>
  );
};

export default MainLayout;
