// import
// img
import development from "../../assets/img/3D/development.png"

export const Developing= ()=>{
    return(
        <>
            <section>
                <div className="text-center">
                    <img src={development} className="development-img" alt="development" />
                    <h1 className="h2 mb-3">این صفحه در حال توسعه است.</h1>
                    <p className="h5">لطفا با صبر خود ما را همراهی کنید.</p>
                </div>
            </section>
        </>
    )
}