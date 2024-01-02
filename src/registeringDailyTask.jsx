// import
import { Navbar } from "./topNavbar"
import { Aside } from "./aside"
import { Footer } from "./footer"
import { TaskCard } from "./taskCard"
import axios from 'axios'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"

export const RegisteringDailyTask = () => {
    // state
    const [Task, setTask] = useState({
        subject: "",
        typeTask: "",
        description: ""
    })
    const [saveId,setId]=useState(0);


    // onInput
    const onInput = ev => {
        // value Input
        const { name, value } = ev.target;
        setTask({ ...Task, [name]: value });
    }
    // get id 
    const getId =async ev=> {
        try {
            const result = await axios.get('http://localhost:3000/tasks');
            setId(result.data.length+1);
        }catch {}
    }
    useEffect(() => {
        const fetch = async () => {
            await getId();
        }
        fetch();

    }, [])
    // Post Data Form
    const addTask =async ev => {
        // get id
        let id = saveId;
        // preventDefault
        ev.preventDefault();
        // time
        const newtime = new Date().getHours()+":"+new Date().getMinutes();
        try {
            // Post Data
            const postData =await axios.post("http://localhost:3000/tasks", {
                id:id,
                subject: Task.subject,
                startTime: newtime,
                description: Task.description
            })
            
            if (postData.status===201) {
                console.log("a")
                toast.success("اطلاعات با موفقیت ثبت شد.");
            }
        }
        catch (error) {
            console.error(error)
        }

        window.location.reload()
    }

    return (
        <>
            <main className="container-custom">
                <div className=" row g-0">
                    {/* aside */}
                    <Aside />
                    {/* content */}
                    <div className="col">
                        <Navbar />

                        {/* Content */}
                        <section className="container p-5 content">
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
                                        <TaskCard />
                                    }
                                    {
                                        <ToastContainer />
                                    }
                                </div>

                            </div>
                        </section>



                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}