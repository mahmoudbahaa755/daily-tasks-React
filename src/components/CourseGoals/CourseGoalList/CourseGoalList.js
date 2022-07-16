import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {

  return (
      <ul>
      {props.courseGoals.map(e => {
        return(
          <CourseGoalItem goal={e.goal} key={e.id} id={e.id} />
        )
      })}
      </ul>
  );
}

export default CourseGoalList;
