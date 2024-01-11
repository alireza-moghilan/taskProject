// logo
import { Link, useLocation } from 'react-router-dom';
import logoColorTwoCard from '../assets/img/logoColorTwoCard.png';
import hamburgerMenu from './topNavbar';
import { useEffect } from 'react';
import { conText } from '../routes/routes';
import { useContext } from 'react';
import { useState } from 'react';

export const Aside = (menuStatus) => {
    const location = useLocation();

    // state
    const [asideClass,setAsideClass]=useState("col-aside");

    // use ConText
    const menu = useContext(conText);
    
    useEffect(() => {
        menu.menuMode===true?setAsideClass("aside-close"):setAsideClass("col-aside")
    }, [menu])


    return (
        <>
            <aside className={asideClass +" aside"} style={{ height: "100vh" }}>
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100 w-100 shadow-custom">
                    <Link to={"/"} className="brand d-flex align-items-end mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <img src={logoColorTwoCard} className='logo-aside' alt="" />
                        <span className="fs-4 ms-3 mb-0 h6">تسکار</span>
                    </Link>
                    <hr className='mb-3' />
                    <ul className="nav nav-pills flex-column mb-auto">
                        {/* <li className="nav-item mb-3">
                            <Link to={"/home"} className={(location.pathname==="/home"||location.pathname==="/"?"active":"link-dark") + " nav-link"} aria-current="page">
                                <span className="me-3 icon-aside"><i className="bi bi-house-door"></i></span>
                                <span>خانه</span>
                            </Link>
                        </li> */}
                        <li className="nav-item mb-3">
                            <Link to={"/dashboard"} className={(location.pathname === "/" || location.pathname === "/dashboard" ? "active" : "link-dark") + " nav-link "}>
                                <span className="me-3 icon-aside"><i className="bi bi-speedometer2"></i></span>
                                <span className='text-link'>داشبورد</span>
                            </Link>
                        </li>
                        <li className="nav-item mb-3">
                            <Link to={"/newTask"} className={(location.pathname === "/newTask" ? "active" : "link-dark") + " nav-link "}>
                                <span className="me-3 icon-aside"><i className="bi bi-list-task"></i></span>
                                <span className='text-link'>ثبت تسک روزانه جدید</span>
                            </Link>
                        </li>
                        <li className="nav-item mb-3">
                            <Link to={"#"} className="nav-link link-dark">
                                <span className="me-3 icon-aside"><i className="bi bi-substack"></i></span>
                                <span className='text-link'>ثبت اهداف بلند مدت</span>
                            </Link>
                        </li>
                        <li className="nav-item mb-3">
                            <Link to={"#"} className="nav-link link-dark">
                                <span className="me-3 icon-aside"><i className="bi bi-view-list"></i></span>
                                <span className='text-link'>مشاهده تمام تسک ها</span>
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}