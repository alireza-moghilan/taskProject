// Component
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
                        <section className="container p-5 content">
                            {
                                props.children
                            }
                        </section>

                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}