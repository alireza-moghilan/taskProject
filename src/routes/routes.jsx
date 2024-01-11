// react Component
import { BrowserRouter, Route, Routes } from "react-router-dom"
// react Component
import { Template } from "../template/template"
import { Dashboard } from "../dashboard"
import { RegisteringDailyTask } from "../registeringDailyTask"



const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Template><Dashboard /></Template>} />
                <Route path={"/dashboard"} element={<Template><Dashboard /></Template>} />
                <Route path={"/newTask"} element={<Template><RegisteringDailyTask /></Template>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;