import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');
  const deleteGoalByClicking = (e) => {
      props.deleteGoal(props.id);
  }
  


  return (
     <li className='goal-list' id={props.id} onClick={deleteGoalByClicking}>
        {props.goal}
      </li>
  );
}

export default CourseGoalItem;
