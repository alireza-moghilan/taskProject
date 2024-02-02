// react Component
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext } from "react"
// react Component
import { Template } from "../template/template"
import { Dashboard } from "../components/home/dashboard"
import { RegisteringDailyTask } from "../components/task/registeringDailyTask"
// store
import { menuState } from "../context/conText"
import { useState } from "react"
import { Error404 } from "../components/errors/error404"


export const conText = createContext(menuState);

const AppRoutes = () => {

    const [menuMode, setMenuMode] = useState(false)

    return (
        <conText.Provider value={{ menuMode, setMenuMode }}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Template><Dashboard /></Template>} />
                    <Route path={"/dashboard"} element={<Template><Dashboard /></Template>} />
                    <Route path={"/newTask"} element={<Template><RegisteringDailyTask /></Template>} />
                    <Route path={"*"} element={<Error404/>} />
                </Routes>
            </BrowserRouter>
        </conText.Provider>
    )
}

export default AppRoutes;