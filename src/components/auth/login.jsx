// imports
// img 
import LoginImg from "../../assets/img/3D/login.png"
// css
import "../../assets/css/login.css";
// jsx
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { client } from '../../services/appAxios';
import { toast } from "react-toastify";
import queryString from 'query-string';
import { conTextDataApi, conTextUserApi } from "../../routes/routes";
import { useContext } from "react";
import { dataApi } from "../../context/conText";
import { GetUserDataOnLoad, GetUserDataOnSubmit } from "../task/getData";


const Login = () => {
    // state
    const [inputTask, setInputTask] = useState({
        userName: "",
        password: ""
    })

    const navigate = useNavigate();
    const loc = useLocation();

    // add style css in page
    useEffect(() => {
        document.querySelector('html').classList.add('loginCss');
        document.querySelector('body').classList.add('loginCss');
    }, [])

    // onInput
    const onInput = ev => {
        // value Input
        const { name, value } = ev.target;
        setInputTask({ ...inputTask, [name]: value });
    }

    // use ConText
    const saveApiInContext = useContext(conTextDataApi);
    // get data ==> for added tasks
    const getData = async () => {
        try {
            // get
            const result = await client.get('/userTask');
            // Pour the received information into the variable
            const { data } = result;
            // Set state
            if (result.data == []) {
                saveApiInContext.setDataState([''])
            }
            else {
                saveApiInContext.setDataState(data)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    // authentication
    const authentication = async ev => {
        // preventDefault
        ev.preventDefault();
        try {
            // post data
            const login = await client.post('/login', inputTask);
            if (login.status === 201) {
                // welcome
                toast.success("خوش آمدید");
                // get data ==> for added tasks
                getData()
                
                // go to home page
                let destination = '/';
                const parsed = queryString.parse(loc.search);
                if (loc.search !== '') {
                    destination = parsed.url;
                }
                navigate(destination, { replace: true });
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="container login">
                <div className="row justify-content-center login-section border border-1">
                    <div className="col-lg-6 col-12 login-right-img p-4 text-center">
                        <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                            <img src={LoginImg} className="w-75" alt="login" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-lg-5 p-4">
                        <div className="h-100 d-flex align-items-center">
                            <form action="" className="row align-items-center justify-content-center gy-3" onSubmit={authentication}>
                                <div>
                                    <h1 className="h1 text-center text-white">
                                        ورود
                                    </h1>
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="" className="form-label text-white mb-3">نام کاربر</label>
                                    <input type="text" className="form-control shadow-md" id="" placeholder="نام کاربر" name="userName" onInput={onInput} />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="" className="form-label text-white mb-3">رمز عبور</label>
                                    <input type="password" className="form-control shadow-md" id="" placeholder="رمز عبور" name="password" onInput={onInput} />
                                </div>
                                <div className="text-center">
                                    <button className="btn main-btn w-100 py-2 btn-font">
                                        ورود
                                    </button>
                                </div>
                                <div className="text-center">
                                    <hr className="text-white p-2" />
                                    <Link to={"/singUp"} className="text-white">هنوز ثبت نام نکردی؟</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;