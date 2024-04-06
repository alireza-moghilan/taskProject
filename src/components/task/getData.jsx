// import
import { client } from "../../services/appAxios";
import { useContext } from "react";
import { conTextDataApi } from "../../routes/routes";
import { useEffect } from "react";

export const GetDataAndPushInContext = () => {
    // use ConText
    const saveApiInContext = useContext(conTextDataApi);
    // Get data
    const getData = async () => {
        try {
            // get
            const result = await client.get('/tasks');
            // Pour the received information into the variable
            const { data } = result;
            // Set state
            if (result.data == []) {
                saveApiInContext.setDataState([''])
            }
            else {
                saveApiInContext.setDataState(data)
                // console.log(saveApiInContext.dataState);
            }
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

    }, [])
}