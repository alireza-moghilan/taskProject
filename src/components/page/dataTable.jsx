//import
import { client } from '../../services/appAxios';
import { useContext, useEffect, useState } from "react"
// import SecondsCounter from '../timer/secondsCounter';
import { hoursToMinute, minuteToHours, timeDifferenceInHours } from '../timer/hoursCalculate';
import { conTextDataApi } from '../../routes/routes';

const DataTable = (ev) => {
    // context
    const saveApiInContext = useContext(conTextDataApi);

    // Getting data from context and filling the State value 
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(saveApiInContext.dataState)
    }, [saveApiInContext.dataState])

    const timeDifferenceFun = (startTime, endTime) => {
        return timeDifferenceInHours(startTime, endTime)
    }
    return (
        <>
            <div className="overflow-auto">
                <table className="table table-striped data-table">
                    <thead>
                        <tr>
                            <th>نام تسک</th>
                            <th>زمان شروع تسک</th>
                            <th>زمان پایان تسک</th>
                            <th>مدت زمان صرف شده</th>
                            <th className="col-4">توضیحات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            /* <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>FakeData</td>
                            <td>FakeData</td>
                            <td className="description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</td>
                            </tr> */
                        }
                        {
                            data.map(index =>
                                <tr key={index.id}>
                                    <td>{index.subject}</td>
                                    <td>{index.timeStartTask}</td>
                                    <td>{index.timeEndTask}</td>
                                    <td>
                                        {
                                            index.timeStartTask != "" ? index.timeEndTask != "" ? timeDifferenceFun(index.timeStartTask, index.timeEndTask) : `تسک هنوز به پایان نرسیده ( ${timeDifferenceFun(index.timeStartTask, index.timeEndTask)} سپری شده)` : timeDifferenceFun(index.timeStartTask, index.timeEndTask)
                                        }
                                    </td>
                                    <td>{index.description}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DataTable;