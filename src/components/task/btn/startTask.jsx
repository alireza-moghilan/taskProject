// import
import { client } from '../../../services/appAxios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { useContext } from 'react';
import { conTextDataApi, conTextEndTaskBtn, conTextIdTask } from '../../../routes/routes';

export const StartTask = (props) => {
    // state => Put data
    const [putData, setPutData] = useState({
        timeStartTask: "",
        startTask: true
    });
    // use ConText
    const idTaskVar = useContext(conTextIdTask);
    const clickState = useContext(conTextEndTaskBtn);
    const saveApiInContext = useContext(conTextDataApi);

    // Getting data from context and filling the State value 
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(saveApiInContext.dataState)
    }, [saveApiInContext.dataState])
    
    
    // let => زمان شروع تسک
    let timeStartTask ="";
    let allTimeStart ="";
    // Get data
    const findTaskStart = () => {
        // New time
        const newtime = new Date().getHours() + ":" + new Date().getMinutes();
        // Fill state (putData)
        data.map(index => {
            if (index.id == props.id) {
                // Fill state (timeStartTask)
                timeStartTask=index.timeStartTask
                // 
                putData.timeStartTask = newtime;
            }
        })
        let arr = []
        data.map(index => {
            arr.push(index.startTask)
        })
        allTimeStart= arr;
    }


    const startTaskFun = async (id) => {
        try {
            // find task start
            findTaskStart();
            for (let i = 0; i < allTimeStart.length; i++) {
                if (allTimeStart[i] == true) {
                    toast.warning("یک تسک درحال اجرا است");
                    return;
                }
            }
            // Checked task run
            if (timeStartTask.length > 0) {
                toast.warning("تسک پایان یافته است.")
                return
            } else {
                // Put data
                await client.put(`tasks/${id}`, putData);
                saveApiInContext.setDataState(saveApiInContext.dataState);
                data.find(index => {
                    if (index.id == id) {
                        index.timeStartTask = putData.timeStartTask;
                        index.startTask = putData.startTask;
                    }
                })
                // set id in store
                idTaskVar.setIdTaskState(id);
                // set state in store
                clickState.setEndTaskBtn(false)
                // toast
                toast.success("می توانید مشغول به کار شوید.");
            }

        } catch (error) { console.error(error) }

    }

    return (
        <>
            <button className='btn main-btn' onClick={() => startTaskFun(props.id)}>
                شروع تسک
            </button>
        </>
    )
}