import { useLocation } from "react-router-dom"
import Timer from "../timer"
import { useState } from "react";
import { Aside } from "./aside";
import { useContext } from "react";
import { conText } from "../routes/routes";

// const hamburgerMenu = ()=> {
//     // state
//     const [menuStatus,setMenuStatus]=useState(false);
//     if (menuStatus) {
//         setMenuStatus(false)
//         localStorage.setItem("menuStatus",false)
//     }else {
//         setMenuStatus(true)
//         localStorage.setItem("menuStatus",true)
//     }

//     // console.log(localStorage)
// }
// export default hamburgerMenu();

export const Navbar = () => {

    // use ConText
    const menu = useContext(conText);

    // link
    const location = useLocation();

    const hamburgerMenu = () => {
        menu.menuMode === true ? menu.setMenuMode(false) : menu.setMenuMode(true)
    }
    return (
        <>
            <nav className="d-flex align-items-center justify-content-between navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item pe-4">
                            <div className="pointer" onClick={hamburgerMenu}>
                                <i className="bi bi-list h2"></i>
                            </div>
                        </li>
                        <li className="nav-item pe-4">
                            <a className={(location.pathname == "/home" ? "active-bottom-line" : "") + " nav-link"} href="">خانه</a>
                        </li>
                        <li className="nav-item pe-4">
                            <a className={(location.pathname == "/aboute" ? "active-bottom-line" : "") + " nav-link"} href="">درباره ما</a>
                        </li>
                        <li className="nav-item pe-4">
                            <a className={(location.pathname == "/setting" ? "active-bottom-line" : "") + " nav-link"} href="">تنظیمات</a>
                        </li>
                    </ul>
                    <div className="">
                        <span className="me-4">{<Timer />}</span>
                        <i className="bi bi-palette-fill"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}