// react Component
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext } from "react"
// react Component
import { Template } from "../template/template"
import { Dashboard } from "../components/page/dashboard"
import { RegisteringDailyTask } from "../components/task/registeringDailyTask"
import { AllTask } from "../components/page/allTask"
import { TargetRegistration } from "../components/page/targetRegistration"
import { Error404 } from "../components/errors/error404"
// store
import { clickEndTaskBtnState, dataApi, idTask, menuState } from "../context/conText"
import { useState } from "react"
import { GetDataAndPushInContext } from "../components/task/getData"


export const conText = createContext(menuState);
export const conTextIdTask = createContext(idTask);
export const conTextEndTaskBtn = createContext(clickEndTaskBtnState);
export const conTextDataApi = createContext(dataApi);

const AppRoutes = () => {

    const [dataState, setDataState] = useState([])
    const [search, setSearch] = useState('');
    const [editDataStatus, setEditDataStatus] = useState(false);
    const [menuMode, setMenuMode] = useState(false)
    const [id, setIdTaskState] = useState(0)
    const [clickEndTaskBtnState, setEndTaskBtn] = useState(false);
    return (
        <conTextDataApi.Provider value={{ dataState, setDataState, search, setSearch, editDataStatus,setEditDataStatus }}>
            <conText.Provider value={{ menuMode, setMenuMode }}>
                <conTextIdTask.Provider value={{ id, setIdTaskState }}>
                    <conTextEndTaskBtn.Provider value={{ clickEndTaskBtnState, setEndTaskBtn }}>
                        <GetDataAndPushInContext />
                        <BrowserRouter>
                            <Routes>
                                <Route path={"/"} element={<Template><Dashboard /></Template>} />
                                <Route path={"/dashboard"} element={<Template><Dashboard /></Template>} />
                                <Route path={"/newTask"} element={<Template><RegisteringDailyTask /></Template>} />
                                <Route path={"/viewAllTask"} element={<Template><AllTask /></Template>} />
                                <Route path={"/targetRegistration"} element={<Template><TargetRegistration /></Template>} />
                                <Route path={"*"} element={<Error404 />} />
                            </Routes>
                        </BrowserRouter>
                    </conTextEndTaskBtn.Provider>
                </conTextIdTask.Provider>
            </conText.Provider>
        </conTextDataApi.Provider>
    )
}

export default AppRoutes;