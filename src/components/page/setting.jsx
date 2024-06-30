// import
// css
import { useContext, useEffect, useState } from 'react';
import '../../assets/css/setting.css';
import { PasswordInputErrors, RePassword, ShowHidePassword, UserInputErrors } from '../input/inputStatus';
import { client } from '../../services/appAxios';
import { toast } from 'react-toastify';
import { conTextUserApi } from '../../routes/routes';
export const Setting = () => {
    // state
    const [input, setInput] = useState({
        userName: "",
        password: "",
        rePassword: ""
    })
    const [putData, setPutData] = useState({
        userName: "",
        password: "",
        rePassword: ""
    })

    const [getUserInfo, setGetUserInfo] = useState({
        userName: "",
        password: "",
    })

    const [putUserInfo, setPutUserInfo] = useState([
        {
            userId: 0,
            userName: "",
            password: "",
            loginStatus: true,
            loginTime: new Date().getHours() + ":" + new Date().getMinutes()
        }
    ])
    const [color, setColor] = useState();

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

    // onInput
    const onInput = ev => {
        // value Input
        const { name, value } = ev.target;
        setInput({ ...input, [name]: value });
    }

    // get data
    const getData = async () => {
        try {
            const result = await client.get('/userInfo');
            // Pour the received information into the variable
            const { data } = result;
            // Set state
            if (result.data == []) {
                saveUserInContext.setUserInfo([''])
            }
            else {
                saveUserInContext.setUserInfo(data);
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    // Get user data OnLoad
    /////////////////////////////////////////////////GetUserDataOnLoad();
    // use ConText
    const saveUserInContext = useContext(conTextUserApi);

    const changeUserInfo = async ev => {
        // preventDefault
        ev.preventDefault();

        // Incomplete error
        if (UserInputErrors(input.userName).logined != true || PasswordInputErrors(input.password).logined != true) {
            setColor("text-danger inputErros")
            return;
        }
        if (input.password != input.rePassword) {
            return;
        }


        try {
            // save in the state (putData)
            putData.userName = input.userName;
            putData.password = input.password;
            // save in the context
            putUserInfo[0].userId = saveUserInContext.userInfo[0].userId;
            putUserInfo[0].userName = input.userName;
            putUserInfo[0].password = input.password;
            
            // post data
            const edit = await client.put(`userInfo/${putUserInfo[0].userId}`, putData);
            if (edit.status === 200) {
                saveUserInContext.setUserInfo(putUserInfo);
                // // Emptying the contents of the forms 
                // setInput({
                //     userName: "",
                //     password: "",
                //     rePassword: ""
                // })
                // get user data
                getData();
                // change userName in localStorage
                localStorage.setItem('userName',putUserInfo[0].userName)
                // welcome
                toast.success("اطلاعات با موفقیت تغییر کرد.");
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const setDataInState = () => {
        const userInfo = saveUserInContext.userInfo;
        let object = { userName: "", password: "" };
        userInfo.map(index => {
            object.userName = index.userName;
            object.password = index.password;
        })
        setGetUserInfo(object)
    }
    // get user info and set in getuserInfo state
    useEffect(() => {
        setDataInState();
    }, [saveUserInContext.userInfo[0]])

    return (
        <>
            <div className="row align-items-center justify-content-center mt-md-100 mt-4">
                <div className="col-12">
                    <div className="row justify-content-center gy-4">
                        {/*  */}
                        <div className="col-md-7 col-xxl-6 col-12 order-md-0 order-1">
                            <div className="bg-light p-4 pb-5 rounded-3 shadow-custom setting">
                                <div className="d-flex align-items-center justify-content-center user-setting">
                                    <div>
                                        <i className="bi bi-person-gear"></i>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h1 className="h3 mb-4">
                                        تغییر اطلاعات کاربری
                                    </h1>

                                    <form action="" className='pt-3' onSubmit={changeUserInfo}>
                                        <div className="col-12 mb-4">
                                            <div className='form-floating'>
                                                <input type="text" className="form-control shadow-md" style={{ "height": "56px", "minHeight": "56px" }} id="floatingInput" placeholder="نام کاربر" name="userName" onInput={onInput} />
                                                <label htmlFor="floatingInput" className='d-flex align-items-center'>نام کاربر</label>
                                            </div>
                                            {UserInputErrors(input.userName, color).message}
                                        </div>
                                        <div className="col-12 mb-4">
                                            <div className='form-floating position-relative'>
                                                <input type={type[0] ?? 'password'} className="form-control shadow-md password" style={{ "height": "56px", "minHeight": "56px" }} id="floatingPassword" placeholder="رمز عبور" name="password" onInput={onInput} />
                                                <label htmlFor="floatingPassword" className='d-flex align-items-center'>رمز عبور</label>
                                                <div className='eye' onClick={() => showHidePassword(0)}>
                                                    <i className={icon[0] + " bi h5"}></i>
                                                </div>
                                            </div>
                                            {PasswordInputErrors(input.password, color).message}
                                        </div>
                                        <div className="form-floating col-12 mb-4">
                                            <div className='form-floating position-relative'>
                                                <input type={type[1] ?? 'password'} className="form-control shadow-md password" style={{ "height": "56px", "minHeight": "56px" }} id="floatingRePassword" placeholder="تکرار رمز عبور" name="rePassword" onInput={onInput} />
                                                <label htmlFor="floatingRePassword" className='d-flex align-items-center'>تکرار رمز عبور</label>
                                                <div className='eye' onClick={() => showHidePassword(1)}>
                                                    <i className={icon[1] + " bi h5"}></i>
                                                </div>
                                            </div>
                                            {RePassword(input.password, input.rePassword).message}
                                        </div>
                                        <div className="text-center">
                                            <button className="btn main-btn w-100 py-2 btn-font">
                                                ذخیره تغییرات
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-5 col-12 mb-100">
                            <div class="alert alert-primary mt-2 p-4" role="alert">
                                <h2 className='h4 text-dark text-center mb-4'>
                                    مشاهده ی نام کاربری و رمز عبور
                                </h2>
                                <form action="">
                                    <div className="col-12 mb-4">
                                        <div className='form-floating position-relative'>
                                            <input type='text' className="form-control shadow-md" style={{ "height": "56px", "minHeight": "56px" }} id="floatingPassword" placeholder="نام کاربری" name="userName" value={getUserInfo.userName} disabled />
                                            <label htmlFor="floatingPassword" className='d-flex align-items-center'>نام کاربری</label>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <div className='form-floating position-relative'>
                                            <input type='text' className="form-control shadow-md" style={{ "height": "56px", "minHeight": "56px" }} id="floatingPassword" placeholder="رمز عبور" name="password" value={getUserInfo.password} disabled />
                                            <label htmlFor="floatingPassword" className='d-flex align-items-center'>رمز عبور</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}