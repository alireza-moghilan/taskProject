// import
// UserInputErrors
export const UserInputErrors = (value, color) => {
    if (value == '') {
        return { logined: false, message: <div class="alert alert-primary mt-2" role="alert"><span className={color}>* الزامی _ فیلد را پر کنید.</span></div> }
    }
    else if (value.length <= 3) {
        return { logined: false, message: <div class="alert alert-primary mt-2" role="alert"><span className={color}>* طول نام کاربری باید بیشتر از 3 کاراکتر باشد.</span></div> }
    } else {
        return { logined: true, message: <div class="alert alert-primary mt-2" role="alert"><span className="text-success">نام کاربری کامل است.</span></div> };
    }
}

// PasswordInputErrors
export const PasswordInputErrors = (value, color) => {
    if (value == '') {
        return { logined: false, message: <div class="alert alert-primary mt-2" role="alert"><span className={color}>* الزامی _ فیلد را پر کنید.</span></div> }
    }
    else if (value.length <= 7) {
        return { logined: false, message: <div class="alert alert-primary mt-2" role="alert"><span className={color}>* طول رمزعبور باید بیشتر از 7 کاراکتر باشد.</span></div> }
    } else {
        return { logined: true, message: <div class="alert alert-primary mt-2" role="alert"><span className="text-success">رمزعبور کامل است.</span></div> };
    }
}

export const RePassword = (password, rePassword) => {
    if (password.length==0) {
        return {message:''};
    }
    if (password == rePassword && password!=0) {
        return { message: <div class="alert alert-primary mt-2" role="alert"><span className="text-success">تطابق دارد.</span></div> };
    } else
        return { message: <div class="alert alert-primary mt-2" role="alert"><span className="text-danger inputErros">تطابق ندارد.</span></div> };

}