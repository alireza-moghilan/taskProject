// import
import { Navbar } from "./topNavbar"
import { Aside } from "./aside"
import { Footer } from "./footer"
import { BoxLink } from "./boxLink"

// img
import calender from "./assets/img/3D/calender-dynamic-gradient.png"
import target from "./assets/img/3D/target-dynamic-gradient.png"
import totalTask from "./assets/img/3D/fav-folder-dynamic-gradient.png"

export const Dashboard = (ev)=> {
    return(
        <>
            <main className="container-custom">
                <div className=" row g-0">
                    {/* aside */}
                    <div className="col-aside">
                        <Aside />
                    </div>

                    {/* content */}
                    <div className="col">
                        <Navbar />

                        {/* Content */}
                        <section className="p-5 content">
                            <div className="row justify-content-center gy-4 gx-4">
                                <BoxLink classCol={"col-4"} title={"تسک روزانه"} link={"todaysTasks"} description={"تسک"} number={10} img={<img src={calender} className="fit-contain" width={70} alt="calender" />} />
                                <BoxLink classCol={"col-4"} title={"اهداف بلند مدت"} link={"longTermPurposes"} description={"هدف اصلی"} number={10} img={<img src={target} className="fit-contain" width={80} />} />
                                <BoxLink classCol={"col-4"} title={"مجموع تسک ها"} link={"ViewAllTasks"} description={"تسک"} number={20} img={<img src={totalTask} className="fit-contain" width={80} />} />
                            </div>

                        </section>



                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}