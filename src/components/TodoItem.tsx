import React, { useContext } from 'react';
import Todo from '../models/todo';
import { TodosCtx } from '../store/todo-ctx';
import { ListItem, ListItemText, ListItemIcon, Checkbox, IconButton } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

import styles from './TodoItem.module.css';

const TodoItem: React.FC<{ item: Todo }> = props => {
    const todosCtx = useContext(TodosCtx);
    const todo = props.item;

    const toggleCheck: React.ChangeEventHandler = () => {
        if (todo.checked) todosCtx.uncheck(todo.id);
        else todosCtx.check(todo.id);
    };

    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox edge="start" checked={todo.checked} onChange={toggleCheck} />
            </ListItemIcon>
            <ListItemText sx={{ wordWrap: 'break-word' }} primary={todo.text} />
            <IconButton edge="end" onClick={todosCtx.remove.bind(null, todo.id)}>
                <DeleteForever />
            </IconButton>
        </ListItem>
    );
};

export default TodoItem;
