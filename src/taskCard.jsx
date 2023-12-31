import axios from 'axios'
import { useEffect, useState } from "react"

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
            <div className={props.colCard ?? "col-3"} key={index.id}>
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

                    <hr />

                    <div className='d-flex justify-content-between'>
                        <div>
                            <DeleteTask id={index.id} />
                            <button className='btn border border-1 border-warning text-warning'>
                                <i className="bi bi-pencil-square h6 d-flex aling-items-center mb-0 p-1 px-0"></i>
                            </button>
                        </div>
                        <button className='btn main-btn'>
                            شروع تسک
                        </button>
                    </div>
                </div>

            </div>
        )
    }
    else {
        return <div className="text-center h4"><p>تسکی یافت نشد!</p></div>;
    }

}