// react Component
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext } from "react"
// react Component
import { Template } from "../template/template"
import { Dashboard } from "../components/home/dashboard"
import { RegisteringDailyTask } from "../components/task/registeringDailyTask"
// store
import { clickEndTaskBtnState, idTask, menuState } from "../context/conText"
import { useState } from "react"
import { Error404 } from "../components/errors/error404"


export const conText = createContext(menuState);
export const conTextIdTask = createContext(idTask);
export const conTextEndTaskBtn = createContext(clickEndTaskBtnState);

const AppRoutes = () => {

    const [menuMode, setMenuMode] = useState(false)
    const [id, setIdTaskState] = useState(0)
    const [clickEndTaskBtnState, setEndTaskBtn] = useState(false);

    return (
        <conText.Provider value={{ menuMode, setMenuMode }}>
            <conTextIdTask.Provider value={{ id, setIdTaskState }}>
                <conTextEndTaskBtn.Provider value={{clickEndTaskBtnState,setEndTaskBtn}}>
                    <BrowserRouter>
                        <Routes>
                            <Route path={"/"} element={<Template><Dashboard /></Template>} />
                            <Route path={"/dashboard"} element={<Template><Dashboard /></Template>} />
                            <Route path={"/newTask"} element={<Template><RegisteringDailyTask /></Template>} />
                            <Route path={"*"} element={<Error404 />} />
                        </Routes>
                    </BrowserRouter>
                </conTextEndTaskBtn.Provider>
            </conTextIdTask.Provider>
        </conText.Provider>
    )
}

export default AppRoutes;