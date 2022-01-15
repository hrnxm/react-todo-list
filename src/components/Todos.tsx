import React, { useContext } from 'react';
import { TodosCtx } from '../store/TodosCtx';
import TodoItem from './TodoItem';
import { Paper, List, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import styles from './Todos.module.css';

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosCtx);

    return todosCtx.items.length === 0 ? (
        <></>
    ) : (
        <Paper elevation={4} className={styles.todosContainer}>
            <List disablePadding>
                {todosCtx.items.map(item => {
                    return !item.checked && <TodoItem key={item.id} item={item} />;
                })}
            </List>
            <Divider />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<KeyboardArrowDown />}>Done</AccordionSummary>
                <AccordionDetails sx={{ padding: 0 }}>
                    <List disablePadding>
                        {todosCtx.items.map(item => {
                            return item.checked && <TodoItem key={item.id} item={item} />;
                        })}
                    </List>
                </AccordionDetails>
            </Accordion>
        </Paper>
    );
};

export default Todos;
