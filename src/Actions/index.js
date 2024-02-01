export const ADD_task='ADD'
// export const Sub_Wallet='SUB'

export const AddTask=(amount)=>{
    return{
        type:ADD_task,
        payload:amount
    }
}

// export const SubFromWallet=(amount)=>{
//     return{
//         type:Sub_Wallet,
//         payload:amount
//     }
// }