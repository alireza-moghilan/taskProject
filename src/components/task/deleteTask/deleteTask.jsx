// import
import { client } from '../../../services/appAxios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"

export const DeleteTask = (props) => {
    const deleteTaskFun = async (id) => {
        try {
            await client.delete(`tasks/${id}`);
        }catch(error){console.error(error)}
        console.log(id)
    }

    return (
        <>
            <button className='btn border border-1 border-danger text-danger me-2' onClick={() => deleteTaskFun(props.id)}>
                <i className="bi bi-trash3 h6 d-flex aling-items-center mb-0 p-1 px-0"></i>
            </button>
        </>
    )
}