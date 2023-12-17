// logo
import { Link } from 'react-router-dom';
import logoColorTwoCard from './assets/img/logoColorTwoCard.png';
export const Footer = (ev) => {
    return (
        <>
            <footer className="border-top bg-light">
                <div className='p-4 d-flex flex-wrap justify-content-between align-items-center'>
                    <ul className="nav col-md-4 justify-content-start">
                        <li className="nav-item"><a href='https://instagram.com/moghilan_web?utm_source=qr&amp;amp;amp;amp;amp;amp;igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank' className="nav-link pe-3 py-0 text-body-secondary"><i class="bi bi-instagram h3 text-main d-flex align-items-center mb-0"></i></a></li>
                        <li className="nav-item"><a href="https://github.com/alireza-moghilan" target='_blank' className="nav-link pe-3 py-0 text-body-secondary"><i class="bi bi-github h3 text-main d-flex align-items-center mb-0"></i></a></li>
                        <li className="nav-item"><a href="https://www.linkedin.com/in/alireza-moghilan" target='_blank' className="nav-link pe-3 py-0 text-body-secondary"><i class="bi bi-linkedin h3 text-main d-flex align-items-center mb-0"></i></a></li>
                        <li className="nav-item"><a href="https://t.me/alireza_m1779" target='_blank' className="nav-link pe-3 py-0 text-body-secondary"><i class="bi bi-telegram h3 text-main d-flex align-items-center mb-0"></i></a></li>
                    </ul>

                    <p className="col-md-4 mb-0 text-body-secondary text-center">© 2023 taskKar, Inc</p>

                    
                    <Link to={"/home"} className="col-md-4 d-flex align-items-center justify-content-end mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <img src={logoColorTwoCard} className='w-25' alt="" />
                    </Link>
                </div>
            </footer>
        </>
    )
}