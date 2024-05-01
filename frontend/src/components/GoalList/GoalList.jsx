import s from './GoalList.module.scss';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import { useEffect, useState } from "react";
import {createGoal, fetchAllGoalsMember, updateGoal} from "../../services/goal.service.js";
import { useDispatch, useSelector } from "react-redux";
import { addGoalList, addGoal } from "../../store/goal/goal-slice.js";

const GoalList = () => {
    const [isToggle, setIsToggle] = useState();
    const [goalInput, setGoalInput] = useState();
    const dispatch = useDispatch();

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    const handleAddInput = (e) => {
        setGoalInput(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createGoal(goalInput)
            .then(response => {
                dispatch(addGoal(response.data));
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchAllGoalsMember()
            .then(response => {
                dispatch(addGoalList(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {
                isToggle ?
                    <div className={s['goal-list']}>
                        <div className={s['arrow-right']} onClick={handleToggle}>
                            <ArrowRightToLine/>
                        </div>
                        <h2>Week Goals</h2>
                        <GoalItem/>
                        <form className={s['form-add-input']} onSubmit={onSubmit}>
                            <input id={s['add-input']}
                                   type="text"
                                   placeholder="Add goal"
                                   onChange={handleAddInput}
                            />
                        </form>
                    </div>
                :
                    <div className={s['arrow-left']} onClick={handleToggle}>
                        <ArrowLeftToLine/>
                    </div>
            }
        </>
    )
}

const GoalItem = () => {
    const goalsList = useSelector(state => state.GOAL.goalsList);

    const handleCheckbox = (id, isChecked) => {
        console.log(isChecked)
        updateGoal(id, {isFinished: isChecked})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log("test")
            })
    }

    return (
        <>
            {goalsList.map((goal) => (
                <>
                    <div className={s['inline-check-title']} key={ goal.id }>
                        <input type="checkbox" onChange={(e) => handleCheckbox(goal.id, e.target.checked)}/>
                        <p>{ goal.title }</p>
                    </div>
                    <p className={s['description']}>{ goal.description }</p>
                    {/*<TaskItem/>*/}
                </>
            ))}
        </>
    );
}

const TaskItem = () => {

    return (<ul className="subtask-list">
        <div className="subtask">
            <input type="checkbox"/>
            <p>Title</p>
        </div>
    </ul>)
}

export default GoalList;
