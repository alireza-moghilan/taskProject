// import
import { EndTask } from "./btn/endTask";
import SecondsCounter from "../timer/secondsCounter";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { conTextDataApi } from "../../routes/routes";

export const TaskSettings = () => {
    // context
    const saveApiInContext = useContext(conTextDataApi);

    // Getting data from context and filling the State value 
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(saveApiInContext.dataState)
    }, [saveApiInContext.dataState])

    return (
        <>
            {
                data.map(index => {
                    if (index.startTask == true) {
                        return (
                            <div className="task-settings" key={index.id}>
                                <div className="p-3 rounded-3 shadow-lg d-flex align-items-center bg-white">
                                    <p className="me-2">{index.subject} :</p>
                                    <SecondsCounter />
                                    <a className="text-main-dark d-flex align-items-center decoration-none mx-2" title="توقف"><i className="d-flex h4 mb-0 bi bi-pause-circle"></i></a>
                                    <EndTask />
                                </div>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}