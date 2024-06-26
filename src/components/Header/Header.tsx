import { Link } from 'react-router-dom';
import { useMemo } from 'react';

import HeaderControls from '../HeaderControls/HeaderControls';
import NavigationList from '../NavigationList/NavigationList';

import logo from '../../assets/header-logo.png';
import './Header.css';

export default function Header() {
  const menuList = useMemo(() => [
      {
        link: '/',
        name: 'Главная',
      },
      {
        link: '/catalog',
        name: 'Каталог',
      },
      {
        link: '/about',
        name: 'О магазине',
      },
      {
        link: '/contacts',
        name: 'Контакты',
      },
    ], []);

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Bosa Noga" />
            </Link>
            <div className="collapse navbar-collapse">
              <NavigationList list={menuList} />
              <HeaderControls />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
