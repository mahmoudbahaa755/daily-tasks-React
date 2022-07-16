import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  console.log('props :')
  console.log(props)
  return (
      <li>
        {props.goal}
      </li>
  );
}

export default CourseGoalList;
