// import
import { useState } from "react";
import { useEffect } from "react";
import { client } from "../../../services/appAxios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { conTextDataApi, conTextEndTaskBtn } from "../../../routes/routes";


export const EndTask = () => {
    const clickState = useContext(conTextEndTaskBtn);
    // state => Put data
    const [putData, setPutData] = useState({
        timeEndTask: "",
        startTask: "false",
        endTask: true,
    });
    // use ConText
    const saveApiInContext = useContext(conTextDataApi);

    // Getting data from context and filling the State value 
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(saveApiInContext.dataState)
    }, [saveApiInContext.dataState])

    // New time
    const newtime = new Date().getHours() + ":" + new Date().getMinutes();

    const endTaskFun = async () => {
        // Get id
        let idTask = data.map(index => {
            if (index.startTask == true) {
                return index.id
            }
        })

        try {
            // Fill state (putData)
            putData.timeEndTask = newtime;
            // Put data
            let response = await client.put(`tasks/${idTask}`, putData);
            // toast
            if (response.status == 200) {
                clickState.setEndTaskBtn(true)
                data.find(index => {
                    if (index.id == idTask) {
                        index.timeEndTask = putData.timeEndTask;
                        index.startTask = putData.startTask;
                        index.endTask = putData.endTask;
                    }
                })
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