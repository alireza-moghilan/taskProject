export const Navbar = (ev) => {
    return (
        <>
            <nav className="d-flex align-items-center justify-content-between navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item pe-4">
                            <a className="nav-link" href="">خانه</a>
                        </li>
                        <li className="nav-item pe-4">
                            <a className="nav-link" href="">درباره ما</a>
                        </li>
                        <li className="nav-item pe-4">
                            <a className="nav-link" href="">تنظیمات</a>
                        </li>
                    </ul>
                    <div className="">
                        <span className="me-4">00:00</span>
                        <i className="bi bi-palette-fill"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}