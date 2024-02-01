// react Component
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext } from "react"
// react Component
import { Template } from "../template/template"
import { Dashboard } from "../dashboard"
import { RegisteringDailyTask } from "../registeringDailyTask"
// store
import { menuState } from "../context/conText"
import { useState } from "react"


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
                </Routes>
            </BrowserRouter>
        </conText.Provider>
    )
}

export default AppRoutes;