// import

import { useState } from "react";
import { client } from "../../services/appAxios";
import { toast } from "react-toastify";


export const FooterModalEditData = (props) => {
    const [putData, setPutData] = useState(props.dataEdit);
    const putTask = async () => {
        try {
            if (putData.id != "") {
                setPutData(props.dataEdit)
                // Put data
                await client.put(`tasks/${putData.id}`, putData);
                // toast
                toast.success("اطلاعات با موفقیت ویرایش شد");
            } else {
                toast.error("خطایی رخ داده لطفا مججد تلاش کنید");
            }

        } catch (error) { console.error(error) }

    }
    return (
        <>
            <div className="modal-footer justify-content-between"style={{"marginBottom":"-15px"}}>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                <button type="button" className="btn main-btn" data-bs-dismiss="modal" onClick={putTask}>اعمال تغییرات</button>
            </div>
        </>
    )
}