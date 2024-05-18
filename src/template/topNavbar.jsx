import { Link, useLocation } from "react-router-dom"
import Timer from "../components/timer/timer"
import { useContext } from "react";
import { conText } from "../routes/routes";
import { ModalCustom } from "../components/modal/modal";

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
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item pe-4">
                            <div className="pointer" onClick={hamburgerMenu}>
                                <i className="bi bi-list h2"></i>
                            </div>
                        </li>
                        <li className="nav-item pe-4">
                            <Link to={"/dashboard"} className={(location.pathname == "/dashboard" ? "active-bottom-line" : "") + " nav-link"}>خانه</Link>
                        </li>
                        <li className="nav-item pe-4">
                            <Link to={"/aboutOurWork"} className={(location.pathname == "/aboutOurWork" ? "active-bottom-line" : "") + " nav-link"}>درباره ما</Link>
                        </li>
                        <li className="nav-item pe-4">
                            <a className={(location.pathname == "/setting" ? "active-bottom-line" : "") + " nav-link"} href="">تنظیمات</a>
                        </li>
                    </ul>
                    <div className="">
                        <span className="me-4">{<Timer />}</span>
                        <ModalCustom titleModal={"تغییر رنگ دلخواه"} body={"changeColor"} dataBsTarget={"modalFormChangeColor"} />
                    </div>
                </div>
            </nav>
        </>
    )
}