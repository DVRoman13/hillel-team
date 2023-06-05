import { icon_basket, icon_logo, icon_search, icon_user } from "./components/iconsNavBar/iconsNavBarLibrary";

import CustomerSubmitButton from '../../ui/CustomerSubmitButton';

// import from '../NavBar.css'

export default function NavBar(){
    return(
        <nav class="navbar">
            <div className="navbar_logo">
                <a href="#home">
                    <img src={icon_logo} alt="logo" />
                </a>
            </div>
            <ul className="navbar_menu">
                <li className="navbar_item">
                <a href="#laptops">Laptops</a>
                </li>
                <li className="navbar_item">
                <a href="#desktop_pcs">Desktop PCs</a>
                </li>
                <li className="navbar_item">
                <a href="#networking_toggle" className="dropdown_toggle">Networking Devices</a>
                </li>
                <li className="navbar_item">
                <a href="#printers_&_scanners">Printers & Scanners</a>
                </li>
                <li className="navbar_item">
                <a href="#pc_parts">PC Parts</a>
                </li>
                <li className="navbar_item">
                <a href="#pc_all_other_products">PC All Other Products</a>
                </li>
                <li className="navbar_item">
                <a href="#Repairs">PC Repairs</a>
                </li>
            </ul>
            <CustomerSubmitButton/>
            <div className="navbar_search">
                <img src={icon_search} alt="search" />
            </div>
            <div className="navbar_basket">
                <img src={icon_basket} alt="basket" />
            </div>
            <div className="navbar_auth">
                <img src={icon_user} alt="user" />
            </div>
        </nav>    
    )
}