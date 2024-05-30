// import
import { BoxLink } from "../card/boxLink"


// img
import calender from "../../assets/img/3D/calender-dynamic-gradient.png"
import target from "../../assets/img/3D/target-dynamic-gradient.png"
import totalTask from "../../assets/img/3D/fav-folder-dynamic-gradient.png"
import today_sTasksImg from "../../assets/img/3D/today_s-task.png"
// components page
import ChartBar from "./chartBar"
import DataTable from "./dataTable"
import { TaskCard } from "../task/taskCard"
// state
import { conTextDataApi } from "../../routes/routes";
import { useContext, useEffect, useState } from "react"

export const Dashboard = (ev) => {
    // context
    const saveApiInContext = useContext(conTextDataApi);

    // Getting data from context and filling the State value 
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(saveApiInContext.dataState)
    }, [saveApiInContext.dataState])

    // overflow body
    useEffect(() => {
        document.querySelector('html').style.overflow = "";
        document.querySelector('body').style.overflow = "";
    }, [])

    // Get the main target length
    const mainTarget = () => {
        let targetLength = 0;
        for (let index = 0; index < data.length; index++) {
            if (data[index].role == true) {
                targetLength++;
            }
        }
        return targetLength
    }

    // Get the daliy task length
    const dailyTask = () => {
        let targetLength = 0;
        for (let index = 0; index < data.length; index++) {
            if (data[index].role == "false" || !data[index].role) {
                targetLength++;
            }
        }
        return targetLength
    }

    // Get the Today's tasks length
    const today_sTasks=()=> {
        let targetLength = 0,
        today_sDate=new Date().toString().split(' ')[0];
        for (let index = 0; index < data.length; index++) {
            if (today_sDate==data[index].dateRegistration) {
                targetLength++;
            }
        }
        return targetLength
    }

    return (
        <>
            {/* Content */}
            <div className="row gy-4 gx-4">
                <BoxLink classCol={"col-lg-3 col-md-6 col-12"} title={"تسک های امروز"} link={"todaysTasks"} description={"تسک"} number={today_sTasks()} img={<img src={today_sTasksImg} className="fit-contain" width={85} alt="calender" />} />
                <BoxLink classCol={"col-lg-3 col-md-6 col-12"} title={"تسک روزانه"} link={"todaysTasks"} description={"تسک"} number={dailyTask()} img={<img src={calender} className="fit-contain" width={70} alt="calender" />} />
                <BoxLink classCol={"col-lg-3 col-md-6 col-12"} title={"اهداف بلند مدت"} link={"longTermPurposes"} description={"هدف اصلی"} number={mainTarget() ?? 0} img={<img src={target} className="fit-contain" width={80} />} />
                <BoxLink classCol={"col-lg-3 col-md-6 col-12"} title={"مجموع تسک ها"} link={"ViewAllTasks"} description={"تسک"} number={data.length} img={<img src={totalTask} className="fit-contain" width={80} />} />


                {/* chart Bar */}
                <div className="col-lg-7 col-12">
                    <div className="shadow-custom rounded-3 p-4 pb-2">
                        <div className="mb-4">
                            <h3 className="fw-bold h6">درصد کارکرد در هفته جاری</h3>
                            <hr />
                        </div>
                        {
                            <ChartBar/>
                        }
                    </div>
                </div>

                <div className="col-lg-5 col-12">
                    <div className="shadow-custom rounded-3 p-4">
                        <div className="mb-4">
                            <h3 className="fw-bold h6">تمام تسک ها</h3>
                            <hr />
                        </div>

                        <div className="task-scroll p-4 ps-2 pt-2">
                            <div className="row g-4">
                                <TaskCard colCard={"12"} classScroll_p={false} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Task */}
                <div className="col-12">
                    <div className="shadow-custom rounded-3 p-4 pb-2">
                        <div className="mb-4">
                            <h3 className="fw-bold h6">تسک های جاری</h3>
                            <hr />
                        </div>
                        {
                            <DataTable />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}