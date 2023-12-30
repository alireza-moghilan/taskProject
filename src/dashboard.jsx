// import
import { Navbar } from "./topNavbar"
import { Aside } from "./aside"
import { Footer } from "./footer"
import { BoxLink } from "./boxLink"

// img
import calender from "./assets/img/3D/calender-dynamic-gradient.png"
import target from "./assets/img/3D/target-dynamic-gradient.png"
import totalTask from "./assets/img/3D/fav-folder-dynamic-gradient.png"
import App from "./chartBar"
import ApexChart from "./chartBar"
import ChartBar from "./chartBar"
import DataTable from "./dataTable"

export const Dashboard = (ev) => {
    return (
        <>
            <main className="container-custom">
                <div className=" row g-0">
                    {/* aside */}
                        <Aside />
                    {/* content */}
                    <div className="col">
                        <Navbar />

                        {/* Content */}
                        <section className="container p-5 content">
                            <div className="row gy-5 gx-4">
                                <BoxLink classCol={"col-4"} title={"تسک روزانه"} link={"todaysTasks"} description={"تسک"} number={10} img={<img src={calender} className="fit-contain" width={70} alt="calender" />} />
                                <BoxLink classCol={"col-4"} title={"اهداف بلند مدت"} link={"longTermPurposes"} description={"هدف اصلی"} number={10} img={<img src={target} className="fit-contain" width={80} />} />
                                <BoxLink classCol={"col-4"} title={"مجموع تسک ها"} link={"ViewAllTasks"} description={"تسک"} number={20} img={<img src={totalTask} className="fit-contain" width={80} />} />


                                {/* chart Bar */}
                                <div className="col-7">
                                    <div className="bg-white shadow-custom rounded-3 p-4 pb-2">
                                        <div className="mb-4">
                                            <h3 className="fw-bold h6">درصد کارکرد در هفته جاری</h3>
                                            <hr />
                                        </div>
                                        {
                                            <ChartBar />
                                        }
                                    </div>
                                </div>

                                {/* chart Bar */}
                                <div className="col-12">
                                    <div className="bg-white shadow-custom rounded-3 p-4 pb-2">
                                        <div className="mb-4">
                                            <h3 className="fw-bold h6">تسک های انجام شده</h3>
                                            <hr />
                                        </div>
                                        {
                                            <DataTable />
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>



                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}