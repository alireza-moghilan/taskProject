// import

import { EndTask } from "./btn/endTask";
import SecondsCounter from "../timer/secondsCounter";

export const TaskSettings = ()=> {
    return(
        <>
            <div className="task-settings">
                <div className="p-3 rounded-3 shadow-lg d-flex align-items-center bg-white">
                    <p className="me-2">تسک 1 :</p>
                    <SecondsCounter />
                    <a className="text-main-dark d-flex align-items-center decoration-none mx-2" title="توقف"><i className="d-flex h4 mb-0 bi bi-pause-circle"></i></a>
                    <EndTask />
                </div>
            </div>        
        </>
    )
}