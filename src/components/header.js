import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id='header' className='header'>
      <NavLink
        to='/'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "#D62222"
        }}>
        Pagina Inicial
      </NavLink>
      <NavLink
        to='/about'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "#D62222"
        }}>
        Saiba Mais
      </NavLink>
    </div>
  );
};

export default Header;
