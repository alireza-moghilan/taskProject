// import img
import logoColorTwoCard from '../assets/img/logoColorTwoCard.png';
// import
import { Link, useLocation } from 'react-router-dom';

export const TopNavbarError404 = () => {
    
    // link
    const location = useLocation();
    return (
        <>
            <nav className="d-flex align-items-center justify-content-between navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item pe-4">
                            <Link to={"/"} className={(location.pathname == "/home" ? "active-bottom-line" : "") + " nav-link"} >خانه</Link>
                        </li>
                        <li className="nav-item pe-4">
                            <a className={(location.pathname == "/aboute" ? "active-bottom-line" : "") + " nav-link"} href="">درباره ما</a>
                        </li>
                        <li className="nav-item pe-4">
                            <a className={(location.pathname == "/setting" ? "active-bottom-line" : "") + " nav-link"} href="">تنظیمات</a>
                        </li>
                    </ul>
                    <div className="">
                        <img src={logoColorTwoCard} className='logo-aside' alt="Logo" />
                    </div>
                </div>
            </nav>
        </>
    )
}