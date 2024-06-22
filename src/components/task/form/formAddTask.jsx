// import
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect, useState } from "react"
import { client } from '../../../services/appAxios';
import { toast } from 'react-toastify';
import { conTextDataApi } from '../../../routes/routes';


export const FormAddTask = () => {
    // state
    const [inputTask, setInputTask] = useState({
        id: 1,
        // userId:1,
        subject: "",
        typeTask: "",
        dateRegistration:new Date().toString().split(' ')[0],
        description: "",
        timeRegisterTheTask: "",
        startTask: false,
        endTask: false,
        timeStartTask: "",
        timeEndTask: "",
        role: false
    })
    const [taskId, setTaskId] = useState([])
    const [checkBox, setCheckBox] = useState(false)
    // use context

    const saveApiInContext = useContext(conTextDataApi);

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
        /////////// set in backend
        // const newtime = new Date().getHours() + ":" + new Date().getMinutes();
        // set id and time
        const task = { ...inputTask };
        /////////// set in backend
        // task.timeRegisterTheTask = newtime;

        // Post Data
        try {
            // Post Data
            const postData = await client.post('/tasks', task)

            // Checked status
            if (postData.status === 201) {
                toast.success("اطلاعات با موفقیت ثبت شد.");
                // Emptying the contents of the forms
                setInputTask({
                    id: 1,
                    subject: "",
                    typeTask: "",
                    dateRegistration:new Date().toString().split(' ')[0],
                    description: "",
                    timeRegisterTheTask: "",
                    startTask: false,
                    endTask: false,
                    timeStartTask: "",
                    timeEndTask: "",
                    role: false
                })
                document.querySelector('form').reset();
            }
        }
        catch (error) {
            console.error(error)
        }

        // get Data
        try {
            // Post Data
            const result = await client.get('/userTask', task)
            // Pour the received information into the variable
            const { data } = result;
            saveApiInContext.setDataState(data)
        }
        catch (error) {
            console.error(error)
        }
    }

    
    return (
        <>
            <div className="p-4 rounded-3 shadow-custom mb-4" onSubmit={addTask}>
                <form action="" method="" className="row g-3">
                    <div className="col-lg-4 col-md-6 col-12 mb-3">
                        <label htmlFor="" className="form-label">موضوع</label>
                        <input type="text" className="form-control" id="" placeholder="موضوع" name="subject" onInput={onInput} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3">
                        <label htmlFor="" className="form-label">نوع تسک</label>
                        <input type="text" className="form-control" id="" placeholder="تسک برای چه شاخه ایی است؟" name="typeTask" onInput={onInput} />
                    </div>
                    <div className="col-lg-4 col-12 mb-3">
                        <div className='d-flex align-items-end h-100 '>
                            <label htmlFor="" className='d-flex justify-content-between align-items-center px-3 py-2 shadow-input bg-checkBox w-100 rounded-2'>
                                <label htmlFor="" className="form-label form-check-label mb-0 h6 input-color">آیا این یک هدف است؟</label>
                                <input type="checkbox" className={(checkBox ? "check-box-active" : "") + " form-check-input check-box my-0 pointer"} 
                                    id="checkBox" placeholder="آیا این یک هدف است؟" name="role" onClick={() => { inputTask.role = !inputTask.role; setCheckBox(!checkBox); }} />
                            </label>
                        </div>
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