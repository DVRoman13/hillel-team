import React from "react";
import classes from "./NavHeader.module.scss";
import LogoHeader from "../LogoHeader/LogoHeader";
import SearchHeader from "../SearchHeader/SearchHeader";

const NavHeader = () => {
  const navigation = [
    { id: 0, name: "Laptops" },
    { id: 1, name: "Desktop PCs" },
    { id: 2, name: "Networking Devices" },
    { id: 3, name: "Printers & Scanners" },
    { id: 4, name: "PC Parts" },
    { id: 5, name: "All Other Products" },
    { id: 6, name: "Repairs" },
    { id: 7, name: "Our Deals" },
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
      <div className={classes.nav}>
        <LogoHeader />
        <ul className={classes.nav_list}>
          {navigation.map((el) => (
            <li key={el.id}>
              <a href="#" className={classes.nav_link} key={el.id}>
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <SearchHeader />
    </div>
    </div>
  );
};

export default NavHeader;
