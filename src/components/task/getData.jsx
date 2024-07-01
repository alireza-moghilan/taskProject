// import
import { client } from "../../services/appAxios";
import { useContext } from "react";
import { conTextDataApi, conTextUserApi } from "../../routes/routes";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const GetDataAndPushInContext = () => {
    // use ConText
    const saveApiInContext = useContext(conTextDataApi);
    // Get data
    const getData = async () => {
        try {
            // get
            const result = await client.get('/userTask');
            if (result.status === 200) {
                // Pour the received information into the variable
                const { data } = result;
                // Set state
                if (result.data == []) {
                    saveApiInContext.setDataState([''])
                }
                else {
                    saveApiInContext.setDataState(data)
                    // console.log(saveApiInContext.dataState);
                }
            }
            else {
                toast.error(result.data.message)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    // Get the latest api changes 
    useEffect(() => {
        const fetch = async () => {
            await getData();
        }
        fetch();

    }, [])
}

export const GetData = () => {
    // use ConText
    const saveApiInContext = useContext(conTextDataApi);
    const get = async () => {
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
                // console.log(saveApiInContext.dataState);
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    return get()
}


export const GetUserDataOnLoad = () => {
    // use ConText
    const saveUserInContext = useContext(conTextUserApi);
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
                // saveUserInContext.setUserInfo(data);
                let userName = localStorage.getItem('userName');
                data.map(index=>{
                    if (index.userName==userName) {
                        saveUserInContext.setUserInfo([index]);
                    }
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    // Get the latest api changes 
    useEffect(() => {
        const fetch = async () => {
            await getData();
        }
        fetch();

    }, [])
}

export const GetUserDataOnSubmit =async () => {
    // use ConText 
    const saveUserInContext = useContext(conTextUserApi);
    try {
        const result = await client.get('/userInfo');
        // Pour the received information into the variable
        const { data } = result;
        console.log(data)
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


export const SetLoginStatus = ()=> {
    localStorage.setItem('loginStatus',true);
}