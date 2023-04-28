import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiShoppingCartFill } from "react-icons/ri";
import classes from "./SearchHeader.module.scss";

const SearchHeader = () => {
  return (
    <div className={classes.search}>
      <div className={classes.search_icon}>
        <a className={classes.search_link} href="#">
          <BiSearch />
        </a>
        <a className={classes.search_link} href="#">
          <RiShoppingCartFill className={classes.search_cart} />
        </a>
      </div>
      <a className={classes['search_link-user']} href="#">
        <img src="/src/assets/user.png" alt="user" />
      </a>
    </div>
  );
};

export default SearchHeader;
