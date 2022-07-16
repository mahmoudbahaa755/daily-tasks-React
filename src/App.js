import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([

  ]);
  let content= (<p style={{ textAlign: 'center' }}>No goals found. Maybe start adding now?</p>)
  const addGoal = goal =>{
    console.log('goal : ')
    console.log(goal)
    content += ( <p style={{ textAlign: 'center' }}>{goal}</p>)
  }

  return (
    <div>
      <CourseInput addGoal={addGoal} />
      {content}
    </div>
  );
};

export default App;
