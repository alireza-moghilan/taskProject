// import
import { Navbar } from "./topNavbar"
import { Aside } from "./aside"
import { Footer } from "./footer"
import { TaskCard } from "./taskCard"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisteringDailyTask = () => {


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
                            {/* form */}
                            <div className="p-4 rounded-3 shadow-custom mb-4">
                                <form action="" method="" className="row">
                                    <div class="col-4 mb-3">
                                        <label for="" class="form-label">موضوع</label>
                                        <input type="text" class="form-control" id="" placeholder="موضوع" />
                                    </div>
                                    <div class="col-4 mb-3">
                                        <label for="" class="form-label">نوع تسک</label>
                                        <input type="text" class="form-control" id="" placeholder="موضوع" />
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label for="" class="form-label">توضیحات</label>
                                        <textarea class="form-control" id="" rows="3" placeholder="توضیحات تکمیلی ... "></textarea>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="btn main-btn px-5">
                                            ثبت تسک
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* task */}
                            <div>
                                <ToastContainer />
                                <div className="row g-4">
                                    {
                                        <TaskCard />
                                    }
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