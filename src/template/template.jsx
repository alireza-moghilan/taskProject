// Component
import { useState } from "react"
import { TaskSettings } from "../components/task/taskSettings"
import { Aside } from "./aside"
import { Footer } from "./footer"
import { Navbar } from "./topNavbar"
import { client } from "../services/appAxios"
import { useContext } from "react"
import { conTextDataApi } from "../routes/routes"
import { useEffect } from "react"

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
                        <section className="content p-md-5 p-sm-4 p-2">
                            <div className="container-md">
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