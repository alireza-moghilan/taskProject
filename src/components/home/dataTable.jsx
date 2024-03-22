//import
import { client } from '../../services/appAxios';
import { useEffect, useState } from "react"
// import SecondsCounter from '../timer/secondsCounter';
import { hoursToMinute, minuteToHours, timeDifferenceInHours } from '../timer/hoursCalculate';

const DataTable = (ev) => {

    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const result = await client.get("/tasks");
            const data = result.data;
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

    }, [getData])

    const timeDifferenceFun = (startTime,endTime) => {
        return timeDifferenceInHours(startTime,endTime)
    }
    return (
        <>
            <div className="overflow-auto">
                <table className="table table-striped data-table">
                    <tr>
                        <th>نام تسک</th>
                        <th>زمان شروع تسک</th>
                        <th>زمان پایان تسک</th>
                        <th>مدت زمان صرف شده</th>
                        <th className="col-4">توضیحات</th>
                    </tr>
                    {/* <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>FakeData</td>
                        <td>FakeData</td>
                        <td className="description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</td>
                    </tr> */}
                    {
                        data.map(index =>
                            <tr key={index.id}>
                                <td>{index.subject}</td>
                                <td>{index.timeStartTask}</td>
                                <td>{index.timeEndTask}</td>
                                <td>
                                    {
                                        index.timeEndTask!=""?timeDifferenceFun(index.timeStartTask,index.timeEndTask):`تسک هنوز به پایان نرسیده ( ${timeDifferenceFun(index.timeStartTask,index.timeEndTask)} سپری شده)`
                                    }
                                    </td>
                                <td>{index.description}</td>
                            </tr>
                            // console.log(index.id)
                        )
                    }
                </table>
            </div>
        </>
    )
}

export default DataTable;