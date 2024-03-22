// import
import { useState } from "react";
import { useEffect } from "react";
import { client } from "../../../services/appAxios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { conTextEndTaskBtn } from "../../../routes/routes";


export const EndTask = () => {
    const clickState = useContext(conTextEndTaskBtn);

    // state => Put data
    const [putData, setPutData] = useState({
        timeEndTask: "",
        startTask: false,
        endTask: true,
    });
    // use ConText
    // const idTaskVar = useContext(conTextIdTask);
    // 
    const [idTask, setIdTask] = useState("");

    // New time
    const newtime = new Date().getHours() + ":" + new Date().getMinutes();

    // Get data
    const getData = async () => {
        try {
            // get
            const result = await client.get('/tasks');
            // Pour the received information into the variable
            const { data } = result;

            let arr = []
            data.map(index => {
                if (index.startTask == true) {
                    arr.push([index.id])
                }
            })
            setIdTask(arr);
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

    }, [getData])


    const endTaskFun = async () => {
        try {
            // Fill state (putData)
            putData.timeEndTask = newtime;
            // Put data
            let response = await client.put(`tasks/${idTask}`, putData);
            // toast
            if (response.status==200) {
                clickState.setEndTaskBtn(true)
                toast.success("تسک با موفقیت پایان یافت");
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <a onClick={endTaskFun} className="text-main-dark d-flex align-items-center decoration-none me-2" title="پایان تسک"><i className="d-flex h4 mb-0 bi bi-play-circle pointer"></i></a>
        </>
    )
}