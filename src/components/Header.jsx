import React from 'react';
import '../assets/style/components/Header.scss';
import logo from '../assets/logo.png';
import userLogo from '../assets/user-icon.png';
/* eslint-disable jsx-a11y/anchor-is-valid  */

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userLogo} alt='userLogo' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;

