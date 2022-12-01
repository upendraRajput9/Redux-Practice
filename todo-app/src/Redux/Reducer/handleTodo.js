let allTodo = [];

const handleTodo = (state = allTodo, action) => {
    switch (action.type) {
        case "ADDTODO":
            state.push(action.todo)
            return [...state];
        case "delete":
            return state;
        case "DELETE":
            state = state.filter((elm, i) => i !== action.index)
            return [...state]
        case "ISCOMPLETE":
            state.map((elm, i) => {
                if (i == action.index) {
                    elm.isComplete = !elm.isComplete
                }
                return elm
            })
            return [...state]
            default : return [...state]
    }
}
export default handleTodo