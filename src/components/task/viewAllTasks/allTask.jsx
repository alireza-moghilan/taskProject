// import
import { TaskCard } from "../taskCard"
import { useContext } from "react"
import { conTextDataApi } from "../../../routes/routes"

export const AllTask = (props) => {
    // use ConText
    const dataContext = useContext(conTextDataApi);

    const findTask = (ev) => {
        // onInput
        dataContext.setSearch(ev.target.value);
    }

    return (
        <>
            <div>
                <div className="row g-4 justify-content-between align-items-center mb-5">
                    <div className="col-11">
                        <input type="search" className="form-control w-100 h-100 py-2 search" name="subject" id="" placeholder="عنوان ..." onInput={findTask} required />
                    </div>
                    <div className="col-1">
                        <button className="btn main-btn">
                            <i class="bi bi-search h4 d-flex h-100 mb-0 p-1"></i>
                        </button>
                    </div>
                </div>
                {/* <SectionTaskCard /> */}
                <div className="row g-4">
                    <TaskCard searchTask={true} />
                </div>
            </div>
        </>
    )
}