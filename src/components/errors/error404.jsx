// import img
import { TopNavbarError404 } from "../../template/topNavbarError404"
// import
import error404 from "../../assets/img/3D/error404.png"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export const Error404 = () => {
    useEffect(()=>{
        document.querySelector('html').style.overflow = "inherit";
        document.querySelector('body').style.overflow = "inherit";
    },[])
    return (
        <>
            <TopNavbarError404 />

            <div className="w-100 d-flex align-items-center justify-content-center flex-column mt-5 pb-4">
                <div className="text-center mb-4">
                    <img src={error404} width={"60%"} alt="error404" />
                </div>

                <div className="text-center">
                    <h1 className="h3 mb-4">چنین صفحه‌ای پیدا نشد.</h1>
                    <p className="mb-4">
                        با عرض پوزش از شما، چنین صفحه‌ای در سایت وجود ندارد یا این صفحه از سایت پاک شده است.
                    </p>

                    <Link to={"/"} className="h5 decoration-none text-main">
                        بازگشت به سایت
                        <span className="ms-2"><i class="bi bi-box-arrow-left"></i></span>
                    </Link>
                </div>
            </div>
        </>
    )
}