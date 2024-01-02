// import { useState } from "react";
import axios from 'axios'
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TaskCard = (props) => {
    const [data, setData] = useState();
    const getData = async () => {
        try {
            const result = await axios.get('http://localhost:3000/tasks');
            const { data } = result;
            setData(data)
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        const fetch = async () => {
            await getData();
        }
        fetch();

    }, [])
    if (data && data.length > 0) {
        return data.map(index =>
            <div className={props.colCard??"col-3"} key={index.id}>
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
                                        index.startTime
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
                </div>

            </div>
        )
    }
    else {
        return <div className="text-center h4"><p>تسکی یافت نشد!</p></div>;
    }

}