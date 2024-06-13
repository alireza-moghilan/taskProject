// react Component
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext } from "react"
// react Component
import { Template } from "../template/template"
import { Dashboard } from "../components/page/dashboard"
import { AboutOurWork } from "../components/page/aboutOurWork"
import { RegisteringDailyTask } from "../components/task/registeringDailyTask"
import { AllTask } from "../components/page/allTask"
import { TargetRegistration } from "../components/page/targetRegistration"
import { Error404 } from "../components/errors/error404"
// store
import { clickEndTaskBtnState, dataApi, idTask, menuState } from "../context/conText"
import { useState } from "react"
import { GetDataAndPushInContext, GetUserData } from "../components/task/getData"
import { Setting } from "../components/page/setting"
import { Developing } from "../components/page/developing"
import Login from "../components/auth/login"
import SingUp from "../components/auth/singUp"


export const conText = createContext(menuState);
export const conTextIdTask = createContext(idTask);
export const conTextEndTaskBtn = createContext(clickEndTaskBtnState);
export const conTextDataApi = createContext(dataApi.data);
export const conTextUserApi = createContext(dataApi.users);

const AppRoutes = () => {

    const [dataState, setDataState] = useState([])
    const [userInfo, setUserInfo] = useState([])
    const [search, setSearch] = useState('');
    const [editDataStatus, setEditDataStatus] = useState(false);
    const [menuMode, setMenuMode] = useState(false)
    const [id, setIdTaskState] = useState(0)
    const [clickEndTaskBtnState, setEndTaskBtn] = useState(false);

    return (
        <conTextDataApi.Provider value={{ dataState, setDataState, search, setSearch, editDataStatus, setEditDataStatus }}>
            <conTextUserApi.Provider value={{ userInfo, setUserInfo }}>
                <conText.Provider value={{ menuMode, setMenuMode }}>
                    <conTextIdTask.Provider value={{ id, setIdTaskState }}>
                        <conTextEndTaskBtn.Provider value={{ clickEndTaskBtnState, setEndTaskBtn }}>
                            <GetDataAndPushInContext />
                            <BrowserRouter>
                                <Routes>
                                    <Route path={"/login"} element={<Login />} />
                                    <Route path={"/singUp"} element={<SingUp />} />

                                    <Route path={"/"} element={<Template><Dashboard /></Template>} />
                                    <Route path={"/dashboard"} element={<Template><Dashboard /></Template>} />
                                    <Route path={"/aboutOurWork"} element={<Template><AboutOurWork /></Template>} />
                                    <Route path={"/setting"} element={<Template><Developing /></Template>} />
                                    <Route path={"/newTask"} element={<Template><RegisteringDailyTask /></Template>} />
                                    <Route path={"/viewAllTask"} element={<Template><AllTask /></Template>} />
                                    <Route path={"/targetRegistration"} element={<Template><TargetRegistration /></Template>} />
                                    <Route path={"*"} element={<Error404 />} />
                                </Routes>
                            </BrowserRouter>
                        </conTextEndTaskBtn.Provider>
                    </conTextIdTask.Provider>
                </conText.Provider>
            </conTextUserApi.Provider>
        </conTextDataApi.Provider>
    )
}

export default AppRoutes;