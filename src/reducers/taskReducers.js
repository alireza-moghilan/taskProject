export const task = {
    id: 0,
    subject: "",
    typeTask: "",
    description: "",
    startTime: ""
}

export const TaskReducer = (state = task, action) => {

    if (action.type === 'UPDATE') {
        state.id = action.payload
        // state.subject = action.payload
        // state.typeTask = action.payload
    }
    return state;
}