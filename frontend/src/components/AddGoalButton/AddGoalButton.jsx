import s from './AddGoalButton.module.scss';

const AddGoalButton = ({buttonValue, onClick}) => {


    return (
        <>
            <input onClick={onClick} className={s['add-goal-input']} type="button" value={buttonValue}/>
        </>
    )
}

export default AddGoalButton;