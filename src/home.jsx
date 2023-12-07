import { Aside } from "./aside"
import { Navbar } from "./topNavbar"

export const HomePage = (ev)=> {
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
                </div>
            </main>
        </>
    )
}