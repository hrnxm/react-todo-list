import React, { useEffect, useReducer } from 'react';
import Action, { ActionType } from '../models/Action';

import Todo from '../models/Todo';

type TodosCtxType = {
    items: Todo[];
    dispatch: React.Dispatch<Action>;
};

export const TodosCtx = React.createContext<TodosCtxType>({
    items: [],
    dispatch: (action: Action) => {},
});

const reducer = (todos: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case ActionType.Add:
            const todo = new Todo(action.text);
            return [...todos, todo];

        case ActionType.ToggleCheck:
            return todos.map(todo => {
                if (todo.id === action.id) todo.checked = !todo.checked;
                return todo;
            });

        case ActionType.Remove:
            return todos.filter(todo => todo.id !== action.id);

        default:
            return todos;
    }
};

const initState = (emptyTodos: Todo[]): Todo[] => {
    const savedTodos = localStorage.getItem('todos');
    let todos = emptyTodos;
    if (savedTodos) {
        try {
            todos = JSON.parse(savedTodos);
        } catch (error) {}
    }
    return todos;
};

const TodosCtxProvider: React.FC = props => {
    const [todos, dispatch] = useReducer(reducer, [], initState);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const contextValue: TodosCtxType = {
        items: todos,
        dispatch: dispatch,
    };

    return <TodosCtx.Provider value={contextValue}>{props.children}</TodosCtx.Provider>;
};

export default TodosCtxProvider;
