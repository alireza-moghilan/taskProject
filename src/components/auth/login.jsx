// imports
// img 
import LoginImg from "../../assets/img/loginCastle.jpg";
import logo from "../../assets/img/logoColorTwoCard.png";
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
import { PasswordInputErrors, UserInputErrors, notFindError } from "../input/inputStatus";
import { SetLoginStatus } from "../task/getData";


const Login = () => {
    // state
    const [input, setInput] = useState({
        userName: "",
        password: ""
    })
    const [color, setColor] = useState();

    // hide and show password
    const [type, setType] = useState(['password', 'password']);
    const [icon, setIcon] = useState(['bi-eye', 'bi-eye']);

    const showHidePassword = (num) => {
        if (type.length < 2) {
            setType([...type, 'password']);
            setIcon([...icon, 'bi-eye']);
        }

        const arrType = [];
        const arrIcon = [];
        for (let index = 0; index < 2; index++) {
            arrType.push(type[index])
            arrIcon.push(icon[index])
        }
        arrType[num] = (arrType[num] == 'password' ? 'text' : 'password');
        arrIcon[num] = (arrIcon[num] == 'bi-eye-slash' ? 'bi-eye' : 'bi-eye-slash');

        setType(arrType);
        setIcon(arrIcon);
    }

    const navigate = useNavigate();
    const loc = useLocation();

    // add style css in page
    useEffect(() => {
        document.querySelector('html').classList.remove('darkMode');
        document.querySelector('html').classList.add('loginCss');
        document.querySelector('body').classList.add('loginCss');
    }, [])

    // onInput
    const onInput = ev => {
        // value Input
        const { name, value } = ev.target;
        setInput({ ...input, [name]: value });
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

    const saveUserInContext = useContext(conTextUserApi);
    const getUserInfo = async () => {
        try {
            // get
            const result = await client.get('/userInfo');
            // Pour the received information into the variable
            const { data } = result;
            // Set state
            if (result.data == []) {
                saveUserInContext.setUserInfo([''])
            }
            else {
                data.map(index => {
                    if (index.userName == input.userName && index.password == input.password) {
                        saveUserInContext.setUserInfo([index]);
                    }
                })
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

        // Incomplete error
        if (UserInputErrors(input.userName).logined != true || PasswordInputErrors(input.password).logined != true) {
            setColor("text-danger inputErros")
            return;
        }

        try {
            // post data
            const login = await client.post('/login', input);
            if (login.status === 201) {
                // welcome
                toast.success("خوش آمدید");
                // get data ==> for added tasks
                getData();
                // SetLoginStatus
                SetLoginStatus();
                // get user information
                getUserInfo();
                // set userName in the localstorage
                localStorage.setItem('userName', input.userName);

                // go to home page
                let destination = '/dashboard';
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
            <main>
                <div className="container login">
                    <div className="row justify-content-center login-section border border-1">
                        <div className="col-lg-6 col-12 login-right-img p-0 text-center">
                            <div className="h-100 w-100">
                                <img src={LoginImg} className="w-100 h-100 cover" alt="login" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 p-lg-5 p-4 bg-white">
                            <div className="h-100 d-flex align-items-center">
                                <form action="" className="row justify-content-center gy-1" onSubmit={authentication}>
                                    <div className="col-12 mb-3"><img src={logo} width={120} alt="" /></div>
                                    <div>
                                        <h1 className="h1 text-start text-dark mb-4">
                                            ورود به سایت
                                        </h1>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="" className="form-label mb-3">نام کاربر:</label>
                                        <input type="text" className="form-control shadow-md py-3" id="" placeholder="نام کاربر" name="userName" onInput={onInput} />
                                        {
                                            UserInputErrors(input.userName, color).message
                                        }
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="" className="form-label mb-3">رمز عبور:</label>
                                        <div className="position-relative">
                                            <input type={type[1] ?? 'password'} className="form-control shadow-md py-3" id="" placeholder="رمز عبور" name="password" onInput={onInput} />
                                            <div className='eye' onClick={() => showHidePassword(1)}>
                                                <i className={icon[1] + " bi h5"}></i>
                                            </div>
                                        </div>
                                        {
                                            PasswordInputErrors(input.password, color).message
                                        }
                                    </div>
                                    <div className="text-center mt-3">
                                        <button className="btn main-btn w-100 py-2 btn-font">
                                            ورود
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <hr className="p-2" />
                                        <Link to={"/singUp"} className="text-dark">هنوز ثبت نام نکردی؟</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login;