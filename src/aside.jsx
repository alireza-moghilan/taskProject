// logo
import logoColorTwoCard from './assets/img/logoColorTwoCard.png';

export const Aside = (ev) => {
    return (
        <>
            <aside style={{height:"100vh"}}>
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100 w-100 shadow">
                    <a href="/" className="d-flex align-items-end mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <img src={logoColorTwoCard} className='w-25' alt="" />
                        <span className="fs-4 ms-3 mb-0 h6">تسک</span>
                    </a>
                    <hr className='mb-3'/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item mb-3">
                            <a href="#" className="nav-link active" aria-current="page">
                                <span className="me-3"><i className="bi bi-house-door"></i></span>
                                خانه
                            </a>
                        </li>
                        <li className="nav-item mb-3">
                            <a href="#" className="nav-link link-dark">
                                <span className="me-3"><i className="bi bi-speedometer2"></i></span>
                                داشبورد
                            </a>
                        </li>
                        <li className="nav-item mb-3">
                            <a href="#" className="nav-link link-dark">
                                <span className="me-3"><i className="bi bi-list-task"></i></span>
                                ثبت تسک روزانه جدید
                            </a>
                        </li>
                        <li className="nav-item mb-3">
                            <a href="#" className="nav-link link-dark">
                                <span className="me-3"><i className="bi bi-list-task"></i></span>
                                ثبت تسک بلند مدت
                            </a>
                        </li>
                        <li className="nav-item mb-3">
                            <a href="#" className="nav-link link-dark">
                                <span className="me-3"><i className="bi bi-view-list"></i></span>
                                مشاهده تمام تسک ها
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
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