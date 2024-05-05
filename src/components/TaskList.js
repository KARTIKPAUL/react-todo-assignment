import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    return (
        <ul className="my-4">
            {tasks.map(task => (
                <li key={task.id} className="flex items-center justify-around bg-gray-100 rounded-md p-2 mb-2 ml-3">
                    {task.title}
                    <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md focus:outline-none"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;

