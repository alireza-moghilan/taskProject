// import
import { useEffect, useState } from "react";
import { FooterModalEditData } from "../../modal/footerModalEditData";
import { client } from "../../../services/appAxios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { conTextDataApi } from "../../../routes/routes";



export const    FormEditTask = (props) => {
    // state
    const [checkBox, setCheckBox] = useState(props.roleTask)
    const [inputTask, setInputTask] = useState({
        id: props.id,
        subject: props.subjectTask,
        typeTask: props.typeTask,
        description: props.descriptionTask,
        role: props.roleTask
    })
    const [tasksEdit, setTasksEdit] = useState([
        {
            id: 0,
            subject: "",
            typeTask: "پروژه های شخصی",
            timeRegisterTheTask: "8:38",
            description: "123",
            startTask: false,
            endTask: false,
            timeStartTask: "",
            timeEndTask: "",
        }
    ])

    // context
    const saveApiInContext = useContext(conTextDataApi);

    // onInput
    const onInput = ev => {
        // value Input
        const { name, value } = ev.target;
        setInputTask({ ...inputTask, [name]: value });
    }

    // put data
    const putTask = async () => {
        try {
            if (inputTask.id != "") {


                // Put data
                const resultPut = await client.put(`tasks/${inputTask.id}`, inputTask);
                // toast
                if (resultPut.status == 200) {
                    tasksEdit.find(index => {
                        if (index.id == inputTask.id) {
                            index.subject = inputTask.subject;
                            index.typeTask = inputTask.typeTask;
                            index.description = inputTask.description;
                            index.role = inputTask.role;
                        }
                    })
                    // set data in the context:dataState
                    saveApiInContext.setDataState(tasksEdit);
                    // checking the status of editDataStatus
                    saveApiInContext.editDataStatus ? saveApiInContext.setEditDataStatus(false) : saveApiInContext.setEditDataStatus(true);

                    // toast
                    toast.success("اطلاعات با موفقیت ویرایش شد");
                } else {
                    toast.error("خطایی رخ داده لطفا مجدد تلاش کنید");
                }
            } else {
                toast.error("خطایی رخ داده لطفا مجدد تلاش کنید");
            }

        } catch (error) { console.error(error) }

    }

    const setDataCheckBox = () => {
        if (inputTask.role==true) {
            inputTask.role = "false";
        }else {
            inputTask.role=true;
        }
        if (checkBox==true) {
            setCheckBox("false");
        }else {
            setCheckBox(true);
        }
    }

    useEffect(() => {
        // set data in the context:dataState
        setTasksEdit(saveApiInContext.dataState)

    }, [saveApiInContext.editDataStatus])

    useEffect(() => {
        // set data in the context:dataState
        setTasksEdit(saveApiInContext.dataState)
    }, [saveApiInContext.dataState])

    return (
        <>
            <form action="" className="row g-4 mt-0">
                <div className="col-md-12">
                    <label htmlFor="" className="d-block mb-2">تغییر عنوان (عنوان قبلی: {props.subjectTask ?? "عنوان"} )</label>
                    <input type="text" className="form-control" name="subject" id="" placeholder="عنوان ..." value={inputTask.subject} onInput={onInput} required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="" className="d-block mb-2">تغییر نوع تسک</label>
                    <input type="text" className="form-control" name="typeTask" id="" placeholder="نوع تسک ..." value={inputTask.typeTask} onInput={onInput} required />
                </div>
                <div className="col-12">
                    <div className='d-flex align-items-end h-100 '>
                        <label htmlFor="" className='d-flex justify-content-between align-items-center px-3 py-2 shadow-input w-100 rounded-2'>
                            <label htmlFor="" className="form-label form-check-label mb-0 h6 input-color">آیا این یک هدف است؟</label>
                            <input type="checkbox" className={(checkBox=="false" ? "" : "check-box-active") + " form-check-input check-box my-0 pointer"} defaultChecked={props.roleTask==="false"?false:props.roleTask}
                                id="checkBox" placeholder="آیا این یک هدف است؟" name="role" onClick={setDataCheckBox} />
                        </label>
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="" className="d-block mb-2">تغییر توضیحات</label>
                    <textarea className="form-control" id="" rows="3" name="description" placeholder="توضیحات ... " value={inputTask.description} onInput={onInput} required ></textarea>
                </div>

                <div className="modal-footer justify-content-between" style={{ "marginBottom": "-15px" }}>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                    <button type="button" className="btn main-btn" data-bs-dismiss="modal" onClick={putTask}>اعمال تغییرات</button>
                </div>
            </form>
        </>
    )
}