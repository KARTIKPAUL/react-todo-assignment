import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
    return (
        <div className='flex flex-col justify-center items-center my-5'>
            <h1 className='text-center text-green-500 text-2xl font-bold'>React To-Do App</h1>
            <TaskInput />
            <TaskList />
        </div>
    );
}

export default App;

