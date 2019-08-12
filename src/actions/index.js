export const addTodo = text => ({
    type: 'ADD_TODO',
    text
});

export const rmTodo = index => ({
    type: 'RM_TODO',
    index
});