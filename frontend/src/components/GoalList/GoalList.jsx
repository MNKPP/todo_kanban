import s from './GoalList.module.scss';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import { useState } from "react";

const GoalList = () => {
    const [isToggle, setIsToggle] = useState();

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <>
            <div className={s['arrow-left']} onClick={handleToggle}>
                <ArrowLeftToLine/>
            </div>
            {isToggle &&
                <div className={s['goal-list']}>
                    <div className={s['arrow-right']} onClick={handleToggle}>
                        <ArrowRightToLine/>
                    </div>
                    <h2>Week Goals</h2>
                    <div className="flex">
                        <input type="checkbox"/>
                        <p>Title</p>
                    </div>
                    <p>Description</p>
                    <div className="subtask-list ml-6">
                        <div className="subtask flex">
                            <input type="checkbox"/>
                            <p>Title</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default GoalList;
