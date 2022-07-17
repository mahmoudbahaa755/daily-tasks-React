import React ,{useState} from 'react';

import style from './CourseGoalItem.module.css';

const CourseGoalItem = props => {

  const deleteGoalByClicking = (e) => {
      props.deleteGoal(props.id);
  }
  const [taskDoneOrNot,setTaskDoneOrNot]= useState(false);
  
const taskDone=(e)=>{
      props.taskDone(props.id,props.done);
      if (taskDoneOrNot === false) {
      setTaskDoneOrNot(true);
      }
      else{
      setTaskDoneOrNot(false);

      }
}

  return (
     <li className={`${style['goal-list']} ${taskDoneOrNot ? style['mark-it'] : ''}`} id={props.id} >
        {props.goal}
        <div>

        <button type='button' className={style.button}  onClick={taskDone}>{taskDoneOrNot ?'Undo' :'Done'}</button>
        <button type='button' className={style.button} onClick={deleteGoalByClicking}>X</button>
        </div>
      </li>
  );
}

export default CourseGoalItem;
