// import
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { client } from '../../services/appAxios';
import { toast } from 'react-toastify';

export const FormAddTask = () => {
    // state
    const [saveId, setIdTask] = useState(0);
    const [inputTask, setInputTask] = useState({
        id: saveId,
        subject: "",
        typeTask: "",
        description: "",
        timeRegisterTheTask: "",
        startTask:false,
        endTask:false,
        timeStartTask:"",
        timeEndTask:""
    })

    // onInput
    const onInput = ev => {
        // value Input
        const { name, value } = ev.target;
        setInputTask({ ...inputTask, [name]: value });
    }

    // Add Task
    const addTask = async ev => {
        // preventDefault
        ev.preventDefault();
        // time
        const newtime = new Date().getHours() + ":" + new Date().getMinutes();
        // set id and time
        const task = { ...inputTask };
        task.timeRegisterTheTask = newtime;


        // Post Data
        try {
            // Post Data
            const postData = await client.post('/tasks',task)

            // Checked status
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