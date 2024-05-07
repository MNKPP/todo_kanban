import s from './AddGoalButton.module.scss';

const AddGoalButton = ({buttonValue, onClick, refForward}) => {


    return (
        <>
            <input ref={refForward} onClick={onClick} className={s['add-goal-input']} type="button" value={buttonValue}/>
        </>
    )
}

export default AddGoalButton;