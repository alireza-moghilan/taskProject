// import
import { Navbar } from "./template/topNavbar"
import { Aside } from "./template/aside"
import { Footer } from "./template/footer"
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { DeleteTask } from "./deleteTask";

export const RegisteringDailyTask = () => {
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

    var id = 0;
    // Add Task
    const addTask = async ev => {
        // preventDefault
        ev.preventDefault();
        // get id
        // time
        const newtime = new Date().getHours() + ":" + new Date().getMinutes();
        // set id and time
        ++id;
        console.log(id)
        const it = { ...inputTask };
        it.id = id;
        it.startTime = newtime;
        // change id Task   
        //setIdTask(id)
        // add Task State
        // 
        // const arrTask=[]
        setInputTask(it)
        const arrTask = [...saveTask, it];
        setSaveTask(arrTask);


        // Post Data
        try {
            // Post Data
            const postData = await axios.post("http://localhost:3000/tasks", inputTask)

            if (postData.status === 201) {
                toast.success("اطلاعات با موفقیت ثبت شد.");
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div>
                <div>
                    <h1 className="h3 fw-bold mb-4">افزودن تسک</h1>
                </div>
                {/* form */}
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

                {/* task */}
                <div>
                    <div className="row g-4">
                        {
                            saveTask.map(index =>
                                <div className={"col-3"} key={index.id}>
                                    <div className="bg-light p-4 rounded-3 shadow-custom">
                                        <div className="mb-2">
                                            <div className="d-flex justify-content-between">
                                                <h4 className="fw-bold">
                                                    {
                                                        index.subject
                                                    }
                                                </h4>
                                                <p>
                                                    <span className="me-1">زمان ثبت :</span>
                                                    <span className="fw-bolder">
                                                        {
                                                            index.startTime
                                                        }
                                                    </span>
                                                </p>
                                            </div>
                                            <hr />
                                        </div>

                                        <div>
                                            <div className="text-start type-task mb-2">
                                                <span className="f-12 fw-bold me-1">نوع تسک:</span>
                                                <span className="f-12 fw-bold">

                                                    {
                                                        index.typeTask
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                <p className="lh-lg">
                                                    <span className="f-12 fw-bold me-1 mb-0">توضیحات:</span>
                                                    {
                                                        index.description
                                                    }
                                                </p>
                                            </div>
                                        </div>

                                        <hr />

                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <DeleteTask id={index.id} />
                                                <button className='btn border border-1 border-warning text-warning'>
                                                    <i className="bi bi-pencil-square h6 d-flex aling-items-center mb-0 p-1 px-0"></i>
                                                </button>
                                            </div>
                                            <button className='btn main-btn'>
                                                شروع تسک
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                        {
                            saveTask && saveTask.length == 0 &&
                            <div className="text-center h4"><p>تسکی یافت نشد!</p></div>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}