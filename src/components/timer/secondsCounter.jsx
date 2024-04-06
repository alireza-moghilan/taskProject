// // import
// import { useState } from "react";
// import { useEffect } from "react";
// import { client } from "../../services/appAxios";
// import { useRef } from "react";
// import { useContext } from "react";
// import { conTextEndTaskBtn } from "../../routes/routes";
// import { hoursToMinute, timeDifferenceInHours } from "./hoursCalculate";

// const SecondsCounter = (props) => {
//     const [hours, setHours] = useState(0);
//     const [minutes, setMinutes] = useState(0);
//     const [seconds, setSeconds] = useState(0);
//     const [data, setData] = useState([]);

//     let timeStart = "";
//     let hoursVar = 0;
//     let minutesVar = 0;
//     let secondVar = 0;
//     const isFirstRender = useRef(true);

//     const clickState = useContext(conTextEndTaskBtn);

//     const getData = async () => {
//         try {
//             const result = await client.get('/tasks');
//             setData(result.data)
//         }
//         catch (e) {
//             console.log(e)
//         }
//     }
//     useEffect(() => {
//         const fetch = async () => {
//             await getData();
//         }
//         data.map(index => {
//             if (index.startTask == true) {
//                 let time = index.timeStartTask;
//                 timeStart = time;
//             }
//         })
//         //
//         if (isFirstRender.current && timeStart != "") {
//             getTime()
//             isFirstRender.current = false;
//         }
//         //
//         if (clickState.clickEndTaskBtnState == true) {
//             setHours(0)
//             setMinutes(0)
//             setSeconds(0)
//             isFirstRender.current = false;
//         }

//         fetch();

//     }, [])
//     // getData
//     const getTime = () => {
//         let time = timeDifferenceInHours(timeStart, "");
//         let minuteToHours = hoursToMinute(time);
//         setHours(minuteToHours.hour);
//         setMinutes(minuteToHours.minute);
//         hoursVar = minuteToHours.hour;
//         minutesVar = minuteToHours.minute;
//         setInterval(() => {
//             secondVar++;
//             setSeconds(secondVar)
//             if (secondVar == 59) {
//                 let minutesClone = minutesVar;
//                 setMinutes(++minutesClone);
//                 ++minutesVar;
//                 secondVar = 0;
//             }
//             if (minutesVar == 59) {
//                 let hoursClone = hoursVar;
//                 setHours(++hoursClone);
//                 ++hoursVar;
//                 minutesVar = 0;
//                 setMinutes(0);
//             }
//         }, 1000);
//     };

//     return (
//         <div className="timer ltr">
//             <span>{hours}:</span>
//             <span>{minutes}:</span>
//             <span>{seconds}</span>
//         </div>
//     );
// };

// export default SecondsCounter;







































// import
import { useState } from "react";
import { useEffect } from "react";
import { client } from "../../services/appAxios";
import { useRef } from "react";
import { useContext } from "react";
import { conTextDataApi, conTextEndTaskBtn } from "../../routes/routes";
import { hoursToMinute, timeDifferenceInHours } from "./hoursCalculate";

const SecondsCounter = (props) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    // const [data, setData] = useState([]);
    let data = [];
    // use ConText
    const saveApiInContext = useContext(conTextDataApi);

    let timeStart = "";
    let hoursVar = 0;
    let minutesVar = 0;
    let secondVar = 0;
    const isFirstRender = useRef(true);

    useEffect(() => {
        data = saveApiInContext.dataState;
        data.find(index => {
            if (index.startTask == true) {
                let time = index.timeStartTask;

                return timeStart = time;
            }
        })
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        //
        getTime()
    }, [saveApiInContext.dataState])

    
    // 
    const getTime = () => {
        let time = timeDifferenceInHours(timeStart, "");
        let minuteToHours = hoursToMinute(time);
        setHours(minuteToHours.hour);
        setMinutes(minuteToHours.minute);
        hoursVar = minuteToHours.hour;
        minutesVar = minuteToHours.minute;
        setInterval(() => {
            secondVar++;
            setSeconds(secondVar)
            if (secondVar == 59) {
                let minutesClone = minutesVar;
                setMinutes(++minutesClone);
                ++minutesVar;
                secondVar = 0;
            }
            if (minutesVar == 59) {
                let hoursClone = hoursVar;
                setHours(++hoursClone);
                ++hoursVar;
                minutesVar = 0;
                setMinutes(0);
            }
        }, 1000);
    };

    return (
        <div className="timer ltr">
            <span>{hours}:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span>
        </div>
    );
};

export default SecondsCounter;