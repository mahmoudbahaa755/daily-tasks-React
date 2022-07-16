import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  const deleteGoal = (id) => {
    props.deleteSelectedGoalByID(id);
  }
  return (
      <ul>
      {props.courseGoals.map(e => {
        return(
          <CourseGoalItem goal={e.goal} deleteGoal={deleteGoal} key={e.id} id={e.id} />
        )
      })}
      </ul>
  );
}

export default CourseGoalList;
