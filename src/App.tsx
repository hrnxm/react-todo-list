import React from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosCtxProvider from './store/TodosCtx';
import Logo from './assets/images/logo.png';

function App() {
    return (
        <>
            <img src={Logo} alt="TODO" className="main-logo" />
            <main>
                <TodosCtxProvider>
                    <NewTodo />
                    <Todos />
                </TodosCtxProvider>
            </main>
        </>
    );
}

export default App;
