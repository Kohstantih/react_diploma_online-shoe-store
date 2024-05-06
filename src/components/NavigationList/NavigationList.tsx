import { NavLink } from "react-router-dom"

import { TNavigationListProps } from "../../types/TNavigationListProps";

export default function NavigationList({ list }: TNavigationListProps) {
    const linkClasses = ({ isActive }: { isActive: boolean}) => isActive ? 'nav-link active' : 'nav-link';

    return (
        <ul className="navbar-nav mr-auto">
            {list.map((item, index) => {
                return (<li key={index} className="nav-item">
                    <NavLink className={linkClasses} to={item.link} >{item.name}</NavLink>
                </li>)
            })}
        </ul>
    )
}