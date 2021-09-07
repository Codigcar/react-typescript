

export default function addReducer(state: any, action: any) {
    console.log('state: ', state);
    console.log('action: ', action);

    switch (action.type) {
        case 'ADD_TYPE':
            return {
                tasks: [...state.tasks, action.payload]
            }
        case 'DELETE_TYPE':
            console.log('eliminado todo');
            return {
                tasks: []
            }
        default:
            break;
    }
}