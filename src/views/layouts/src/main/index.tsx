import React, { FC } from "react";
import Header from "../../../components/src/header";
import { titlePage } from "../../../../utils/src/string";

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ title, children }) => {
  titlePage(title);
  return (
    <>
      <Header />
      <main role="main">{children}</main>
    </>
  );
};

export default MainLayout;
