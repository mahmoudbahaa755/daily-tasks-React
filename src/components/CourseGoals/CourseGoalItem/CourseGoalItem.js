import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');
  const deleteGoal = (e) => {
    
    console.log(props.id)
  }
  

  return (
     <li className='goal-list' id={props.id} onClick={deleteGoal}>
        {props.goal}
      </li>
  );
}

export default CourseGoalItem;
