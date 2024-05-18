// import
import { useEffect } from "react";
import { VideoPlayer } from "../video/videoPlayer";
// img
import addTask from "../../assets/img/aboutUs/addTask.png";
import targetTask from "../../assets/img/aboutUs/targetTask.png";
import flashRight from "../../assets/img/svg/flashRight.svg";
import flashLeft from "../../assets/img/svg/flashLeft.svg";
import videoPoster from "../../assets/img/aboutUs/videoPoster.png";
// video link
import video from "../../assets/video/example_video.mp4";
// css
import '../../assets/css/aboutOurWork.css';


export const AboutOurWork = () => {

    return (
        <>
            <section className="position-relative mb-100">
                <div className="row align-items-center">
                    <div className="col-7">
                        <div className="img-addTask">
                            <div className="bg-rectangular"></div>
                            <div className="bg-rectangular"></div>
                            <div className="bg-rectangular"></div>
                            <div className="bg-rectangular"></div>
                            <img src={addTask} className="w-100" alt="" />
                        </div>
                    </div>
                    <div className="col-5">
                        <h1 className="h1 mb-3 text-main-dark active-bottom-line pb-3">چرا ما اینجایم؟!</h1>
                        <p className="lh-lg h5">
                            پروژه مدیریت وظایف تسک یک پروژه نرم‌افزاری است که طراحی و توسعه آن به منظور بهبود مدیریت و برنامه‌ریزی وظایف و وظیفه‌های روزمره افراد و تیم‌ها انجام شده است. این پروژه با استفاده از امکانات و قابلیت‌های پلتفرم‌های نرم‌افزاری مدرن، سعی در ایجاد یک سیستم جامع و کارآمد برای مدیریت وظایف دارد.
                        </p>
                    </div>
                </div>
            </section>


            <div className="position-relative">
                <div className="position-absolute flash-right">
                    <img src={flashRight} alt="" />
                </div>
                <div className="active-bottom-line"></div>
            </div>


            <section className="position-relative mb-100">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className=" ps-md-5 ms-md-4">
                            <h2 className="h1 mb-3 text-main-dark active-bottom-line pb-3">هدف اصلی پروژه</h2>
                            <p className="lh-lg h5">
                                پروژه مدیریت وظایف تسک یک پروژه نرم‌افزاری است که طراحی و توسعه آن به منظور بهبود مدیریت و برنامه‌ریزی وظایف و وظیفه‌های روزمره افراد و تیم‌ها انجام شده است. این پروژه با استفاده از امکانات و قابلیت‌های پلتفرم‌های نرم‌افزاری مدرن، سعی در ایجاد یک سیستم جامع و کارآمد برای مدیریت وظایف دارد.
                            </p>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="">
                            <img src={targetTask} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <div className="position-relative w-100">
                <div className="position-absolute flash-left">
                    <img src={flashLeft} alt="" />
                </div>
                <div className="active-bottom-line"></div>
            </div>

            <section className="pt-5">
                <div className="text-center">
                    <h2 className="h1 text-main mb-5">
                        آموزش کار با نرم‌افزار
                    </h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3 w-100 ltr">
                            <VideoPlayer srcVideo={video} videoPoster={videoPoster} textBelowVideo={"آموزش کار با نرم افزار"} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}