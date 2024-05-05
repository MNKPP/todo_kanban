import s from './GoalList.module.scss';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import  {useEffect, useState } from "react";
import { createGoal, fetchAllGoalsMember, updateGoal } from "../../services/goal.service.js";
import { useDispatch, useSelector } from "react-redux";
import { addGoalList, addGoal, updateGoalInList, selectGoal  } from "../../store/goal/goal-slice.js";
import GoalModal from "../GoalModal/GoalModal.jsx";

const GoalList = () => {
    const [isToggle, setIsToggle] = useState();
    const [goalInput, setGoalInput] = useState();
    const dispatch = useDispatch();
    const goalSelected = useSelector(state => state.GOAL.goalSelected);

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
                        <h2>Week Objectives</h2>
                        {goalSelected && <GoalModal />}
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
    const dispatch = useDispatch();
    const goalsList = useSelector(state => state.GOAL.goalsList);

    const handleGoalClick = (goal) => {
        dispatch((selectGoal(goal)));
    }

    const handleCheckbox = (id, isChecked) => {
        updateGoal(id, {isFinished: isChecked})
            .then(response => {
                dispatch(updateGoalInList(response.data));
            })
            .catch(error => {
                console.log("An error occurred");
            })
    }

    return (
        <>
            {goalsList.map(goal => (
                <div className={s['goal-item']} key={goal.id}>
                    <div className={s['inline-check-title']}>

                        <input type="checkbox" checked={goal.isFinished}
                               onChange={(e) => handleCheckbox(goal.id, e.target.checked)}/>

                        <div onClick={() => handleGoalClick(goal)}>
                            {goal.isFinished
                                ? <>
                                    <p className="line-through text-gray-400">{goal.title}</p>
                                    <p className={`${s.description} text-gray-400`}>{goal.description}</p>
                                </>
                                : <>
                                    <p>{goal.title}</p>
                                    <p className={s['description']}>{goal.description}</p>
                                </>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default GoalList;
