import React from "react";
import { Mail, CircleUserRound } from "lucide-react";
import { SearchBar } from "../../index";

function Header() {
  return (
    <header className="sac_header">
      <SearchBar />
      <div className="sac_header__right">
        <div className="sac_header__right__icon sac_header__icon_container">
          <Mail />
        </div>

        <div className="sac_header__right__user">
          <div className="sac_header__right__user__avatar sac_header__icon_container">
            <CircleUserRound />
          </div>
          <div className="sac_header__right__user__info">
            <h3 className="sac_header__right__user__info__name">John Doe</h3>
            <p className="sac_header__right__user__info__email">
              example@gmail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
