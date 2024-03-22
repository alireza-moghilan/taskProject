// import
import { client } from '../../../services/appAxios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { useContext } from 'react';
import { conTextEndTaskBtn, conTextIdTask } from '../../../routes/routes';

export const StartTask = (props) => {
    // state => Put data
    const [putData,setPutData]=useState({
        timeStartTask:"",
        startTask:true
    });
    // state => زمان شروع تسک
    const [timeStartTask,setTimeStartTask]=useState("");
    // 
    const [allTimeStart,setAllTimeStart]=useState(false);
    // use ConText
    const idTaskVar = useContext(conTextIdTask);
    const clickState = useContext(conTextEndTaskBtn);

    // New time
    const newtime = new Date().getHours() + ":" + new Date().getMinutes();

    // Get data
    const getData = async () => {
        try {
            // get
            const result = await client.get('/tasks');
            // Pour the received information into the variable
            const { data } = result;

            // Fill state (putData)
            data.map(index=> {
                if (index.id==props.id) {
                    // Fill state (timeStartTask)
                    setTimeStartTask(index.timeStartTask)
                    // 
                    putData.timeStartTask=newtime;
                }
            })
            let arr=[]
            data.map(index=> {
                arr.push(index.startTask)
            })
            setAllTimeStart(arr);

        }
        catch (e) {
            console.log(e)
        }
    }

    // Get the latest api changes
    useEffect(()=> {
        const fetch = async () => {
            await getData();
        }
        fetch();
    },[getData])

    const startTaskFun = async (id) => {        
        try {
            for (let i = 0; i < allTimeStart.length; i++) {
                if (allTimeStart[i]==true) {
                    toast.warning("یک تسک درحال اجرا است");
                    return;
                }
            }
            // Checked task run
            if (timeStartTask.length>0){
                toast.warning("تسک پایان یافته است.")
                return
            }else{
                // Put data
                await client.put(`tasks/${id}`, putData);
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