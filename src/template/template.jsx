// Component
import { useContext, useEffect } from "react"
import { TaskSettings } from "../components/task/taskSettings"
import { Aside } from "./aside"
import { Footer } from "./footer"
import { Navbar } from "./topNavbar"
import { client } from "../services/appAxios"
import { conTextUserApi } from "../routes/routes"
import { GetUserDataOnLoad } from "../components/task/getData"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"

export const Template = props => {
    // state
    // const [loginStatus, setLoginStatus] = useState();

    // // use ConText
    // const saveUserInContext = useContext(conTextUserApi);
    // // get data user onload
    GetUserDataOnLoad();
    // // 
    // useEffect(() => {
    //     saveUserInContext.userInfo.map(index => {
    //         return setLoginStatus(index.loginStatus)
    //     })
    //     loginStatusFun();
    // }, []);
    // // 
    // // const [loginStatus,setLoginStatus]=useState();
    // const navigate = useNavigate();
    // const loc = useLocation();
    // const loginStatusFun = () => {
    //     if (!loginStatus) {
    //         // go to login page
    //         let destination = '/login';
    //         const parsed = queryString.parse(loc.search);
    //         console.log("'" + loc.search + "'");
    //         if (loc.search !== '') {
    //             destination = parsed.url;
    //         }
    //         navigate(destination, { replace: true });
    //     }
    // }
    // add style css in page
    useEffect(() => {
        document.querySelector('html').classList.remove('loginCss');
        document.querySelector('body').classList.remove('loginCss');
    }, [])
    return (
        <>
            <main className="container-custom">
                <div className=" row g-0">
                    {/* aside */}
                    <Aside />
                    {/* content */}
                    <div className="col">
                        <Navbar />

                        {/* Content */}
                        <section className="content p-md-5 p-sm-4 p-2">
                            <div className="container-md">
                                {
                                    props.children
                                }
                            </div>
                        </section>

                        <TaskSettings />

                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}