import { useContext, useEffect, useState } from "react"
import { DeleteTask } from './btn/deleteTask';
import { StartTask } from "./btn/startTask";
import { Modal, ModalCustom } from "../modal/modal";
import { conTextDataApi } from "../../routes/routes";

export const TaskCard = (props) => {
    // State Data
    const [data, setData] = useState([]);
    const [dataClone, setDataClone] = useState([]);
    // context
    const saveApiInContext = useContext(conTextDataApi);

    useEffect(() => {
        let dataVar = [...data];
        dataVar = dataVar.filter(index => {
            return index.subject.toLowerCase().includes(saveApiInContext.search.toLowerCase());
        });
        setDataClone(dataVar)
    }, [saveApiInContext.search])

    useEffect(() => {
        setData(saveApiInContext.dataState)
        setDataClone(saveApiInContext.dataState)
    }, [saveApiInContext.dataState])


    const dataFun = () => {
        const returnData = (stateName) => {
            return (stateName.map(index =>
                <div className={props.colCard ?? "col-xxl-4 col-md-6 col-sm-12"} key={index.id}>
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
                                            index.timeRegisterTheTask
                                        }
                                    </span>
                                </p>
                            </div>
                            <hr />
                        </div>


                        <p className={(props.classScroll_p == false ? "" : "scroll-p") + " scroll-custom lh-lg"}>
                            {
                                index.description
                            }
                        </p>

                        <hr />
                        <div className='d-flex justify-content-between'>
                            <div>
                                <DeleteTask id={index.id} />
                                <ModalCustom titleModal={"ویرایش تسک"} body={"input"} id={index.id} subjectTask={index.subject} typeTask={index.typeTask} descriptionTask={index.description} dataBsTarget={"modalFormEdit" + index.id} />
                            </div>
                            <StartTask id={index.id} />
                        </div>
                    </div>

                </div>
            )
            )
        }

        if (saveApiInContext.search.length == 0) {
            return returnData(data);
        } else {
            return returnData(dataClone);
        }
    }

    // Checked data and data length
    if (data && data.length > 0) {
        return dataFun()
    }
    else {
        return <div className="text-center h4"><p>تسکی یافت نشد!</p></div>;
    }

}


