export const addTodo = (todo)=>{
    return({
        type:"ADDTODO",
        todo
    })
}
export const deleteTodo = (index)=>{
return({
    type:"DELETE",
    index
})
} 

export const isComplete =(index)=>{
    return(
        {
            type:"ISCOMPLETE",
            index
        }
    )
}
