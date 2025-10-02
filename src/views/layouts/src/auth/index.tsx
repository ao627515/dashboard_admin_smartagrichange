import React, { FC } from "react";
import { titlePage } from "../../../../utils/src/string";

interface AuthLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ title, children }) => {
  titlePage(title);
  return (
    <>
      <main role="main" className="sac_auth_container">
        {children}
      </main>
    </>
  );
};

export default AuthLayout;
