import React, { useContext, useState } from 'react';
import { TodosCtx } from '../store/todo-ctx';
import { Button, TextField } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosCtx);
    const [inputValue, setInputValue] = useState('');
    const [isInputValid, setIsInputValid] = useState(true);

    const handleInputChange: React.ChangeEventHandler = event => {
        const element = event.target as HTMLInputElement;
        setInputValue(element.value);
        setIsInputValid(true);
    };

    const onSubmitHandler: React.FormEventHandler = event => {
        event.preventDefault();

        if (inputValue.trim().length > 0) {
            todosCtx.add(inputValue);
            setInputValue('');
        } else {
            setIsInputValid(false);
        }
    };

    return (
        <div className={styles.addTodoContainer}>
            <form onSubmit={onSubmitHandler}>
                <TextField
                    label="New Item"
                    variant="outlined"
                    size="small"
                    fullWidth
                    autoComplete="off"
                    value={inputValue}
                    error={!isInputValid}
                    onChange={handleInputChange}
                    autoFocus
                />
                <Button type="submit" variant="contained" startIcon={<AddCircle />}>
                    Add
                </Button>
            </form>
        </div>
    );
};

export default NewTodo;
