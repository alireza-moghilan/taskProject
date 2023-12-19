//import


const DataTable = (ev) => {
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
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>FakeData</td>
                        <td>FakeData</td>
                        <td className="description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>FakeData</td>
                        <td>FakeData</td>
                        <td className="description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Johnson</td>
                        <td>FakeData</td>
                        <td>FakeData</td>
                        <td className="description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default DataTable;