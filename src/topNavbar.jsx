import { useLocation } from "react-router-dom"
import Timer from "./timer"
import { useState } from "react";
import { Aside } from "./aside";

export const Navbar = (props) => {
    // state
    const [menuStatus,setMenuStatus]=useState(true);
    // link
    const location = useLocation();

    
    const Menu = ()=> {
        if (menuStatus) {
            setMenuStatus(false)
        }else {
            setMenuStatus(true)
        }
        return <Aside menuStatus={menuStatus}/>;
    }
    return (
        <>
            <nav className="d-flex align-items-center justify-content-between navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item pe-4">
                            <div onClick={Menu}>
                                <i class="bi bi-list h2"></i>
                            </div>
                        </li>
                        <li className="nav-item pe-4">
                            <a className={(location.pathname=="/home"?"active-bottom-line":"") + " nav-link"} href="">خانه</a>
                        </li>
                        <li className="nav-item pe-4">
                            <a className={(location.pathname=="/aboute"?"active-bottom-line":"") + " nav-link"} href="">درباره ما</a>
                        </li>
                        <li className="nav-item pe-4">
                            <a className={(location.pathname=="/setting"?"active-bottom-line":"") + " nav-link"} href="">تنظیمات</a>
                        </li>
                    </ul>
                    <div className="">
                        <span className="me-4">{<Timer/>}</span>
                        <i className="bi bi-palette-fill"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}