
export const setStep=(action={step:1})=>{
    let {step}=action
    return{
type:"STEP",
step
    }
}
export const setMax =(action={max:null})=>{
    let {max}=action
    return{
type:"MAX",
max
    }
}
export const incNum=()=>{
    return({
        type:"INC",
    })
}

export const decNum=()=>{
    return({
        type:"DEC"
    })
}

export const reset=()=>{
    return({
        type:"RESET"
    })
}