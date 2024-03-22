// // import
// import { useState } from "react";
// import { useEffect } from "react";
// import { client } from "../../services/appAxios";
// import { useRef } from "react";
// import { useContext } from "react";
// import { conTextEndTaskBtn } from "../../routes/routes";

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
//             timeDifference("time");
//             isFirstRender.current = false;
//         }
//         // 
//         if (clickState.clickEndTaskBtnState == true) {
//             timeDifference(undefined);
//             setHours(0)
//             setMinutes(0)
//             setSeconds(0)
//             isFirstRender.current = false;
//         }

//         fetch();

//     }, [getData])

//     // Convert hours to minutes
//     const hoursToMinute = (time) => {
//         let timeStartTask = time;
//         let hour = "";
//         let minute = "";
//         for (let i = 0; i < timeStartTask.length; i++) {
//             if (timeStartTask[i] == ":" && hour.length == 1) {
//                 hour = hour.replace(/^/, '0');
//             }
//             if (timeStartTask[i] != ":" && hour.length < 2) {
//                 hour += timeStartTask[i];
//             }
//             else {
//                 if (timeStartTask[i] != ":") {
//                     minute += timeStartTask[i]
//                 }
//             }
//         }

//         let hourToMinute = Number(hour) * 60 + Number(minute)
//         return hourToMinute
//     }

//     // Time difference
//     const timeDifference = (state) => {
//         if (state == undefined)
//             return;
//         else
//             if (!undefined) {
//                 let timeStartTask = hoursToMinute(timeStart)
//                 let newTime = hoursToMinute(new Date().getHours() + ":" + new Date().getMinutes())

//                 let timeDifferenceToMinute = newTime - timeStartTask;
//                 return minuteToHours(timeDifferenceToMinute);
//             }
//     }

//     // Convert minutes to hours
//     const minuteToHours = (time) => {
//         let hour = Math.floor(time / 60);
//         let minute = time % 60;
//         setHours(hour)
//         setMinutes(minute)
//         minutesVar = minute;
//         hoursVar = hour;
//         getTime()
//         return
//     }

//     const getTime = () => {
//         setInterval(() => {
//             secondVar++;
//             setSeconds(secondVar)
//             if (secondVar == 60) {
//                 let minutesClone = minutesVar;
//                 setMinutes(++minutesClone);
//                 ++minutesVar;
//                 secondVar = 0;
//             }
//             if (minutesVar == 60) {
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
import { conTextEndTaskBtn } from "../../routes/routes";
import { hoursToMinute, timeDifferenceInHours } from "./hoursCalculate";

const SecondsCounter = (props) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [data, setData] = useState([]);

    let timeStart = "";
    let hoursVar = 0;
    let minutesVar = 0;
    let secondVar = 0;
    const isFirstRender = useRef(true);

    const clickState = useContext(conTextEndTaskBtn);

    const getData = async () => {
        try {
            const result = await client.get('/tasks');
            setData(result.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        const fetch = async () => {
            await getData();
        }
        data.map(index => {
            if (index.startTask == true) {
                let time = index.timeStartTask;
                timeStart = time;
            }
        })
        //
        if (isFirstRender.current && timeStart != "") {
            getTime()
            isFirstRender.current = false;
        }
        //
        if (clickState.clickEndTaskBtnState == true) {
            setHours(0)
            setMinutes(0)
            setSeconds(0)
            isFirstRender.current = false;
        }

        fetch();

    }, [getData])

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
            if (secondVar == 60) {
                let minutesClone = minutesVar;
                setMinutes(++minutesClone);
                ++minutesVar;
                secondVar = 0;
            }
            if (minutesVar == 60) {
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