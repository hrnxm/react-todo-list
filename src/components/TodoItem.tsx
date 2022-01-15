import React, { useContext } from 'react';
import Todo from '../models/Todo';
import { TodosCtx } from '../store/TodosCtx';
import { ListItem, ListItemText, ListItemIcon, Checkbox, IconButton } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { ActionType } from '../models/Action';

import styles from './TodoItem.module.css';

const TodoItem: React.FC<{ item: Todo }> = props => {
    const todosCtx = useContext(TodosCtx);
    const todo = props.item;

    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.checked}
                    onChange={() => {
                        todosCtx.dispatch({ type: ActionType.ToggleCheck, id: todo.id });
                    }}
                />
            </ListItemIcon>
            <ListItemText
                classes={{ root: `${todo.checked ? styles.checked : ''} ${styles.wrapText}` }}
                primary={todo.text}
            />
            <IconButton
                edge="end"
                onClick={() => todosCtx.dispatch({ type: ActionType.Remove, id: todo.id })}>
                <DeleteForever color="error" />
            </IconButton>
        </ListItem>
    );
};

export default TodoItem;
