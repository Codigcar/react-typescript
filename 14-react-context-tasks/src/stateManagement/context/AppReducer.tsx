

export default function addReducer(state: any, action: any) {
    console.log('state: ', state);
    console.log('action: ', action);

    switch (action.type) {
        case 'ADD_TYPE':
            return {
                tasks: [...state.tasks, action.payload]
            }
        case 'DELETE_TYPE':
            return {
                tasks: []
            }

        case 'DELETE_BY_ID_TYPE':
            return {
                tasks: state.tasks.filter((task: any) => task.id !== action.payload)
            }

        case 'UPDATE_TASK':
            return {
                tasks: state.tasks.map((task: any) => {
                    if (task.id === action.payload.id) {
                        task.title = action.payload.title
                        task.description = action.payload.description
                    }
                    return task;
                })
            }
        case 'TOGGLE_TASK_DONE':
            // const taskDB = state.tasks.find(task.id)
            return {
                tasks: state.tasks.map((task: any) => {
                    if (task.id === action.payload) {
                        // ...task
                        task.done = !task.done
                    }
                    return task;
                })
            }
        default:
            break;
    }
}