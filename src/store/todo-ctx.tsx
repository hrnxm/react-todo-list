import React, { useState, useEffect } from 'react';

import Todo from '../models/todo';
import uid from '../types/uid';

type TodosCtxType = {
    items: Todo[];
    add: (text: string) => void;
    check: (id: uid) => void;
    uncheck: (id: uid) => void;
    remove: (id: uid) => void;
};

export const TodosCtx = React.createContext<TodosCtxType>({
    items: [],
    add: (text: string) => {},
    check: (id: uid) => {},
    uncheck: (id: uid) => {},
    remove: (id: uid) => {},
});

const TodosCtxProvider: React.FC = props => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem('todos');
        let parsed = [];
        if (savedTodos) {
            try {
                parsed = JSON.parse(savedTodos);
            } catch (error) {}
        }
        return parsed;
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodoHandler = (text: string) => {
        const todo = new Todo(text);

        setTodos(prevTodos => {
            return [...prevTodos, todo];
        });
    };

    const checkTodoHandler = (id: uid) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) todo.checked = true;

                return todo;
            });
        });
    };

    const uncheckTodoHandler = (id: uid) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) todo.checked = false;

                return todo;
            });
        });
    };

    const removeTodoHandler = (id: uid) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    };

    const contextValue: TodosCtxType = {
        items: todos,
        add: addTodoHandler,
        check: checkTodoHandler,
        uncheck: uncheckTodoHandler,
        remove: removeTodoHandler,
    };

    return <TodosCtx.Provider value={contextValue}>{props.children}</TodosCtx.Provider>;
};

export default TodosCtxProvider;
