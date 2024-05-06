import React, {useEffect, useRef, useState} from "react";
import s from './GoalModal.module.scss';
import { XCircle } from "lucide-react";
import {createTask, deleteGoal, updateGoal} from "../../services/goal.service.js";
import {addTaskInGoalList, clearSelectGoal, deleteGoalInList, updateGoalInList} from "../../store/goal/goal-slice.js";
import { useDispatch, useSelector } from "react-redux";
import AddGoalButton from "../AddGoalButton/AddGoalButton.jsx";

const GoalModal = () => {
    const dispatch = useDispatch();
    const goal = useSelector(state => state.GOAL.goalSelected);
    const [isAdd, setIsAdd] = useState(false)

    const [inputValue, setInputValue] = useState(goal ? goal.title : '');
    const [textAreaValue, setTextAreaValue] = useState(goal ? goal.description : '');
    const [taskValue, setTaskValue] = useState('');

    const [isTitleClick, setIsTitleClick] = useState(false);
    const inputRef = useRef();
    const taskRef = useRef();

    const handleTitleClick = () => {
        setIsTitleClick(!isTitleClick);
        if (!isTitleClick) {
            setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
        }
    }

    const handleCloseModal = () => {
        dispatch(clearSelectGoal());
    }

    const handleUpdateField = (e) => {
        e.preventDefault();
        updateGoal(goal.id, {title: inputValue, description: textAreaValue})
            .then(response => {
                dispatch(updateGoalInList(response.data));
                if (inputRef.current) {
                    setIsTitleClick(!isTitleClick);
                }
            })
            .catch(error => {
                throw new Error(error.message);
            })
    }

    const handleAddInput = () => {
        setIsAdd(!isAdd);
        if (!isAdd) {
            setTimeout(() => taskRef.current && taskRef.current.focus(), 0);
        }
    }

    const handleAddTask = () => {
        createTask(goal.id, {title: taskValue})
            .then(response => {
                dispatch(addTaskInGoalList({
                    id: goal.id,
                    task: response.data,
                }));
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleDeleteGoal = () => {
        deleteGoal(goal.id)
            .then(response => {
                dispatch(deleteGoalInList({id: goal.id}))
                dispatch(clearSelectGoal());
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className={s['goal-modal']}>
            <div className={s['xCircle']}>
                <AddGoalButton buttonValue="Add Task" onClick={handleAddInput}/>
                <button type="button" onClick={handleDeleteGoal}>Delete</button>
                <XCircle onClick={handleCloseModal} />
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    {isTitleClick
                        ? <input
                            type="text"
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onBlur={handleUpdateField}
                            name="input-title"
                        />
                        : <h2 onClick={handleTitleClick}>{inputValue}</h2>
                    }
                </div>
                <textarea
                    value={textAreaValue}
                    onChange={(e) => setTextAreaValue(e.target.value)}
                    onBlur={handleUpdateField}
                    placeholder="Take Note"
                    name="textarea-description"
                >
                </textarea>
            </form>
            <ul className={s['subtask-list']}>
                <h3>Subtasks</h3>
                {goal.tasks.map((task, index) => (
                    <TaskItem key={index} task={task} />
                ))}
                { isAdd &&
                    <form onSubmit={e => e.preventDefault()}>
                        <input type="text" ref={taskRef} onChange={e => setTaskValue(e.target.value)} onBlur={handleAddTask}/>
                    </form>
                }
            </ul>
        </div>
    );
}

const TaskItem = ({ task }) => {

    return (
        <li className={s['subtask']}>
            <input type="checkbox"/>
            <p>{task.title}</p>
            <select name="input-day" id="">
                <option value="" selected="selected">----</option>
                <option value="">Monday</option>
                <option value="">Tuesday</option>
                <option value="">Wednesday</option>
                <option value="">Thursday</option>
                <option value="">Friday</option>
                <option value="">Saturday</option>
                <option value="">Sunday</option>
            </select>
        </li>
    )
}

export default GoalModal;