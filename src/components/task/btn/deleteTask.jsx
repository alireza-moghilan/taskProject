// import
import { client } from '../../../services/appAxios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { conTextDataApi } from '../../../routes/routes';

export const DeleteTask = (props) => {
    // context
    const saveApiInContext = useContext(conTextDataApi);
    const deleteTaskFun = async (id) => {
        console.log(props.id)
        let deleteTaskVar = [];
        try {
            await client.delete(`tasks/${id}`);
            saveApiInContext.dataState.map(index => {
                if (index.id != id) {
                    deleteTaskVar.push(index)
                }
            })
            saveApiInContext.setDataState(deleteTaskVar)

        } catch (error) { console.error(error) }
    }

    return (
        <>
            <button className='btn border border-1 border-danger text-danger me-2' data-bs-toggle="modal" data-bs-target={`#deleteModal_${props.id}`}>
                <i className="bi bi-trash3 h6 d-flex aling-items-center mb-0 p-1 px-0"></i>
            </button>


            <div className="modal fade" id={`deleteModal_${props.id}`} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className={"modal-dialog modal-dialog-centered"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalLabel">حذف تسک</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h2 className='h5'>آیا مطمئن به انجام این کار هستید؟</h2>
                        </div>
                        <div class="modal-footer justify-content-end">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                            <button className='btn btn-danger px-5' data-bs-dismiss="modal" onClick={() => deleteTaskFun(props.id)}>حذف</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}