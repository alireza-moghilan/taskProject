// import
import { useEffect, useState } from "react";
import { FooterModalEditData } from "../../modal/footerModalEditData";
import { client } from "../../../services/appAxios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { conTextDataApi } from "../../../routes/routes";



export const FormEditTask = (props) => {
    // state
    const [inputTask, setInputTask] = useState({
        id: props.id,
        subject: props.subjectTask,
        typeTask: props.typeTask,
        description: props.descriptionTask,
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
            timeEndTask: ""
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

    useEffect(() => {
        // set data in the context:dataState
        setTasksEdit(saveApiInContext.dataState)
        console.log("a")

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