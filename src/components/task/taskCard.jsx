import { client } from "../../services/appAxios";
import { useEffect, useState } from "react"
import { DeleteTask } from './btn/deleteTask';
import { StartTask } from "./btn/startTask";

export const TaskCard = (props) => {
    // State Data
    const [data, setData] = useState();
    // Get data
    const getData = async () => {
        try {
            // get
            const result = await client.get('/tasks');
            // Pour the received information into the variable
            const { data } = result;
            // Set state
            setData(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    // Get the latest api changes 
    useEffect(() => {
        const fetch = async () => {
            await getData();
        }
        fetch();

    }, [getData])

    // Checked data and data length
    if (data && data.length > 0) {
        return data.map(index =>
            <div className={props.colCard ?? "col-4"} key={index.id}>
                <div className="bg-light p-4 rounded-3 shadow-custom">
                    <div className="mb-2">
                        <div className="d-flex justify-content-between">
                            <h4 className="fw-bold">
                                {
                                    index.subject
                                }
                            </h4>
                            <p>
                                <span className="me-1">زمان ثبت :</span>
                                <span className="fw-bolder">
                                    {
                                        index.timeRegisterTheTask
                                    }
                                </span>
                            </p>
                        </div>
                        <hr />
                    </div>


                    <p className="lh-lg">
                        {
                            index.description
                        }
                    </p>

                    <hr />

                    <div className='d-flex justify-content-between'>
                        <div>
                            <DeleteTask id={index.id} />
                            <button className='btn border border-1 border-warning text-warning'>
                                <i className="bi bi-pencil-square h6 d-flex aling-items-center mb-0 p-1 px-0"></i>
                            </button>
                        </div>
                        <StartTask id={index.id} />
                    </div>
                </div>

            </div>
        )
    }
    else {
        return <div className="text-center h4"><p>تسکی یافت نشد!</p></div>;
    }

}

