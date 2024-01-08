// import
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import Context from './context/myContext';
import { TaskCard } from './taskCard';

export const FormAddTask = () => {
    // state
    const [saveId, setIdTask] = useState(0);
    const [inputTask, setInputTask] = useState({
        id: saveId,
        subject: "",
        typeTask: "",
        description: "",
        startTime: ""
    })
    const [saveTask, setSaveTask] = useState([]);

    // onInput
    const onInput = ev => {
        // value Input
        const { name, value } = ev.target;
        setInputTask({ ...inputTask, [name]: value });
    }

    // get id 
    const getId = async () => {
        try {
            const result = await axios.get('http://localhost:3000/tasks');
            setIdTask(result.data.length);
            setSaveTask(result.data);
        } catch { }
    }
    useEffect(() => {
        const fetch = async () => {
            await getId();
        }
        fetch();

    }, [])

    // Add Task
    const addTask = async ev => {
        // preventDefault
        ev.preventDefault();
        // get id
        let id = saveId;
        // time
        const newtime = new Date().getHours() + ":" + new Date().getMinutes();
        // set id and time
        inputTask.id = ++id;
        inputTask.startTime = newtime;
        // change id Task   
        // setIdTask(id)
        // add Task State
        setSaveTask(inputTask)
        // 
        // const arrTask=[]
        if (saveTask.length == 0) {
            setSaveTask([inputTask]);
            console.log(saveTask)
        }
        else {
            const arrTask = [...saveTask];
            arrTask.push(inputTask);
            // add Array
            setSaveTask(arrTask);
        }

        // Post Data
        // try {
        //     // Post Data
        //     const postData = await axios.post("http://localhost:3000/tasks", inputTask)

        //     if (postData.status === 201) {
        //         toast.success("اطلاعات با موفقیت ثبت شد.");
        //     }
        // }
        // catch (error) {
        //     console.error(error)
        // }
    }


    return (
        <>
        <div className="p-4 rounded-3 shadow-custom mb-4" onSubmit={addTask}>
            <form action="" method="" className="row">
                <div className="col-4 mb-3">
                    <label htmlFor="" className="form-label">موضوع</label>
                    <input type="text" className="form-control" id="" placeholder="موضوع" name="subject" onInput={onInput} />
                </div>
                <div className="col-4 mb-3">
                    <label htmlFor="" className="form-label">نوع تسک</label>
                    <input type="text" className="form-control" id="" placeholder="تسک برای چه شاخه ایی است؟" name="typeTask" onInput={onInput} />
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="" className="form-label">توضیحات</label>
                    <textarea className="form-control" id="" rows="3" placeholder="توضیحات تکمیلی ... " name="description" onInput={onInput}></textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn main-btn px-5">
                        ثبت تسک
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}