import React, { useRef, useState } from "react";
import s from './GoalModal.module.scss';
import { XCircle } from "lucide-react";
import { updateGoal } from "../../services/goal.service.js";
import {clearSelectGoal, updateGoalInList} from "../../store/goal/goal-slice.js";
import { useDispatch, useSelector } from "react-redux";
import AddGoalButton from "../AddGoalButton/AddGoalButton.jsx";

const GoalModal = () => {
    const dispatch = useDispatch();
    const goal = useSelector(state => state.GOAL.goalSelected);
    const [isAdd, setIsAdd] = useState('false')

    const [inputValue, setInputValue] = useState(goal.title);
    const [textAreaValue, setTextAreaValue] = useState(goal.description);

    const [isTitleClick, setIsTitleClick] = useState(false);
    const inputRef = useRef();

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
    }

    return (
        <div className={s['goal-modal']}>
            <div className={s['xCircle']}>
                <AddGoalButton buttonValue="Add Task" onClick={handleAddInput}/>
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
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
                { isAdd && <input type="text" /> }
            </ul>
        </div>
    );
}

const TaskItem = () => {

    return (
        <li className={s['subtask']}>
            <input type="checkbox"/>
            <p>Title</p>
        </li>
    )
}

export default GoalModal;