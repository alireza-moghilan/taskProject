// import
import { FormEditTask } from "../task/form/formEditTask"




export const ModalCustom = (props) => {
    return (
        <>
            <button type="button" className='btn border border-1 border-warning text-warning' data-bs-toggle="modal" data-bs-target={"#"+props.dataBsTarget}>
                <i className="bi bi-pencil-square h6 d-flex aling-items-center mb-0 p-1 px-0"></i>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id={props.dataBsTarget} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className={"modal-dialog modal-dialog-centered modal-" + (props.size ?? "modal")}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalLabel">{props.titleModal??"عنوان مدال"}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                props.body=="input" &&
                                <FormEditTask id={props.id} subjectTask={props.subjectTask} typeTask={props.typeTask} descriptionTask={props.descriptionTask} />
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}