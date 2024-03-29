// Component
import { TaskSettings } from "../components/task/taskSettings"
import { Aside } from "./aside"
import { Footer } from "./footer"
import { Navbar } from "./topNavbar"

export const Template = props => {
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
                        <section className="content p-5 ">
                            <div className="container">
                            {
                                props.children
                            }
                            </div>
                        </section>

                        <TaskSettings />

                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}