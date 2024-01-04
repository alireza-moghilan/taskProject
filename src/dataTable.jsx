//import
import axios from 'axios'
import { useEffect, useState } from "react"

const DataTable = (ev) => {

    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const result = await axios.get('http://localhost:3000/tasks');
            const data = result.data;
            setData(data)
            console.log(data)
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
                                <td>{index.startTime}</td>
                                <td>{index.startTime}</td>
                                <td>{"1 دقیقه"}</td>
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