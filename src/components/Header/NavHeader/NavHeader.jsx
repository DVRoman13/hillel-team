import React from "react";
import classes from './NavHeader.module.scss';

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
    <div className="">
      {navigation.map((el)=> (
        <button key={el.id}>{el.name}</button>
      ))}
    </div>
  );
};

export default NavHeader;
