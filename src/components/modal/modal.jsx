// import
import { FormChangeColor } from "../task/form/formChangeColor"
import { FormEditTask } from "../task/form/formEditTask"


// How to use the component ...
{/* <ModalCustom titleModal={"title"} body={"type ..."} id={id} subjectTask={subject} typeTask={typeTask || Otherwise, it is not written} descriptionTask={description || Otherwise, it is not written} roleTask={role || Otherwise, it is not written} dataBsTarget={"modalFormEdit" + index.id} || Otherwise, it is not written /> */}

export const ModalCustom = (props) => {
    return (
        <>
            {
                props.body == "input" &&
                <button type="button" className='btn border border-1 border-warning text-warning' data-bs-toggle="modal" data-bs-target={"#" + props.dataBsTarget}>
                    <i className="bi bi-pencil-square h6 d-flex aling-items-center mb-0 p-1 px-0"></i>
                </button>
            }
            {
                props.body == "changeColor" &&
                <button type="button" className='btn p-0 m-0' data-bs-toggle="modal" data-bs-target={"#" + props.dataBsTarget}>
                    <i className="bi bi-palette-fill"></i>
                </button>
            }

            {/* <!-- Modal --> */}
            <div className="modal fade" id={props.dataBsTarget} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className={"modal-dialog modal-dialog-centered modal-" + (props.size ?? "modal")}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalLabel">{props.titleModal ?? "عنوان مدال"}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                props.body == "input" &&
                                <FormEditTask id={props.id} subjectTask={props.subjectTask} typeTask={props.typeTask} descriptionTask={props.descriptionTask} roleTask={props.roleTask} />
                            }

                            {
                                props.body == "changeColor" &&
                                <FormChangeColor />
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}