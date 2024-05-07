import { FormEditTask } from "../task/form/formEditTask"

export const ModalEditFrom = (props) => {
    return (
        <>
            <div className={"modal-dialog modal-dialog-centered modal-" + (props.size ?? "modal")}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="ModalLabel">{props.titleModal ?? "عنوان مدال"}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            props.body == "input" &&
                            <FormEditTask id={props.id} subjectTask={props.subjectTask} typeTask={props.typeTask} descriptionTask={props.descriptionTask} />
                        }
                    </div>

                </div>
            </div>
        </>
    )
}