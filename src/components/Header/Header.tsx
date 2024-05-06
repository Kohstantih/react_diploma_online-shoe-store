import { Link } from 'react-router-dom';

import logo from '../../assets/header-logo.png';

import HeaderControls from '../HeaderControls/HeaderControls';
import NavigationList from '../NavigationList/NavigationList';

import "./Header.css";
import { useMemo } from 'react';

export default function Header() {
    
    const menuList = useMemo (() => {
        return [
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
    ]}, []);
    
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
    )
}
