export const timeDifferenceInHours = (startTime, endTime) => {
    if (startTime=="") {
        return "تسک تا به حال اجرا نشده است"
    }
    
    // Convert hours to minutes
    const hoursToMinute = (timeHoursToMinute) => {
        let timeStartTask = timeHoursToMinute;
        let hour = "";
        let minute = "";
        for (let i = 0; i < timeStartTask.length; i++) {
            if (timeStartTask[i] == ":" && hour.length == 1) {
                hour = hour.replace(/^/, '0');
            }
            if (timeStartTask[i] != ":" && hour.length < 2) {
                hour += timeStartTask[i];
            }
            else {
                if (timeStartTask[i] != ":") {
                    minute += timeStartTask[i]
                }
            }
        }
        if (hour == "00") {
            hour = 12;
        }
        let hourToMinute = Number(hour) * 60 + Number(minute)
        return hourToMinute
    }

    // Time difference
    const timeDifferenceInMinutes = () => {
        // Convert start time to minutes
        let timeStartTask = hoursToMinute(startTime);
        // 
        let newTime = ""
        // Check the end time status
        // اگر به پایان رسیده باشد مقدار با زمان پایانی محاسبه می شود در غیر اینصورت با زمان جاری
        if (endTime != "") {
            newTime = endTime;
            // Separate strings
            let am = newTime.split(":", 2);
            let cloneNewTimeVar = newTime.split(":", 2)
            let cloneStartTaskVar = startTime.split(":", 2)
            // Changing the time from 12 hours to 24 hours
            if (Number(am[0]) < 12) {
                // Change time from 00:00 to 12:00
                newTime = hoursToMinute(Number(cloneNewTimeVar[0]) + 24 + ":" + cloneNewTimeVar[1])
                if (Number(cloneStartTaskVar[0])<12) {
                    timeStartTask = hoursToMinute(Number(cloneStartTaskVar[0]) + 24 + ":" + cloneStartTaskVar[1])
                }
            } else {
                newTime = hoursToMinute(endTime)
            }
        }
        else {
            newTime = new Date().getHours() + ":" + new Date().getMinutes();
            // Separate strings
            let am = newTime.split(":", 2);
            let cloneStartTaskVar = startTime.split(":", 2)

            // Changing the time from 12 hours to 24 hours
            if (Number(am[0]) < 12) {
                // Change time from 00:00 to 12:00
                if (Number(am[0] == 0)) {
                newTime = hoursToMinute(24 + ":" + new Date().getMinutes())
                } else {
                    newTime = hoursToMinute(new Date().getHours() + 24 + ":" + new Date().getMinutes())
                }
                if (Number(cloneStartTaskVar[0])<12) {
                    timeStartTask = hoursToMinute(Number(cloneStartTaskVar[0]) + 24 + ":" + cloneStartTaskVar[1])
                }


            } else {
                newTime = hoursToMinute(new Date().getHours() + ":" + new Date().getMinutes())
            }
        }

        // console.log(startTime)
        // time difference
        let timeDifferenceToMinute;
        if (newTime >= timeStartTask) {
            timeDifferenceToMinute = newTime - timeStartTask;
        } else {
            timeDifferenceToMinute = timeStartTask - newTime;
        }
        return timeDifferenceToMinute;
    }

    // Convert minutes to hours
    const minuteToHours = () => {
        let timeDifference = timeDifferenceInMinutes("time");
        let hour = Math.floor(timeDifference / 60);
        let minute = timeDifference % 60;
        return `${hour}:${minute}`
    }
    return minuteToHours();
}

// Convert hours to minutes
export const hoursToMinute = (time) => {
    let timeStartTask = time;
    let hour = "";
    let minute = "";
    for (let i = 0; i < timeStartTask.length; i++) {
        if (timeStartTask[i] == ":" && hour.length == 1) {
            hour = hour.replace(/^/, '0');
        }
        if (timeStartTask[i] != ":" && hour.length < 2) {
            hour += timeStartTask[i];
        }
        else {
            if (timeStartTask[i] != ":") {
                minute += timeStartTask[i]
            }
        }
    }

    // let hourToMinute = Number(hour) * 60 + Number(minute)
    return { hour: hour, minute: Number(minute) }
}