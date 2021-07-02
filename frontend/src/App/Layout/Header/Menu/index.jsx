import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt, CgMenuRight } from 'react-icons/cg'

import classes from "./style.module.css";

const getText = (str) => {
  const parts = str.split("");
  parts.shift();
  return parts.shift().toUpperCase() + parts.join("");
};

const LinkItem = ({ text, onClick }) => (
  <li>
    <Link to={'/'+text.toLowerCase()} onClick={onClick}>
      {text}
    </Link>
  </li>
);

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Toogle Menu"
        onClick={() => setIsOpen(!isOpen)}
        className={`${classes.btn} ${isOpen ? classes.btnIsOpen : ""}`}
      >
        { isOpen ? <CgMenuRight size="1.5em" /> : <CgMenuRightAlt size="1.5em" /> }
      </button>
      <nav className={`${classes.menu} ${isOpen ? classes.menuIsOpen : ""}`}>
        <ul>
          <LinkItem text="Products" onClick={() => setIsOpen(false)} />
          <LinkItem text="Create" onClick={() => setIsOpen(false)} />
        </ul>
      </nav>
    </>
  );
};
