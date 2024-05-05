import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskInput = () => {
    const [taskInput, setTaskInput] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            dispatch(addTask({ id: Math.random(), title: taskInput }));
            setTaskInput('');
        }
    };

    return (
        <div className="my-4">
            <input
                type="text"
                value={taskInput}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md mr-2 focus:outline-none"
                placeholder='Please Enter Task..'
            />
            <button
                onClick={handleAddTask}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
            >
                Add Task
            </button>
        </div>
    );
};

export default TaskInput;

