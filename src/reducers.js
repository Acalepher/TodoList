const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.text];
        case 'RM_TODO':
            return [...state].splice(action.index,1);
        default:
            return state;
    }
};

export default todos;

