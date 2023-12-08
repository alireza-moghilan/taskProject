import { Navbar } from "./topNavbar"
import { Aside } from "./aside"
import { Footer } from "./footer"

export const Dashboard = (ev)=> {
    return(
        <>
            <main className="row g-0">
                {/* aside */}
                <div className="col-aside">
                    <Aside />
                </div>

                {/* content */}
                <div className="col">
                    <Navbar />

                    {/* Content */}
                    <section className="p-5 content">
                        <h1 className="h3">داشبورد</h1>
                    </section>



                    <Footer />
                </div>
            </main>
        </>
    )
}