import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { }

  ]);
  let content = (
      <CourseGoalList courseGoals={courseGoals} />
    )
  if(courseGoals.length === 0){
    
     content= (<p style={{ textAlign: 'center' }}>No goals found. Maybe start adding now?</p>)
  }
  const addGoal = goal =>{
    setCourseGoals(prevGoals =>{
      return [{id: Math.random().toString() ,goal:goal} , ...prevGoals]
    })
    console.log(courseGoals)
  }
  
  

  return (
    <div>
      <CourseInput addGoal={addGoal} />
      {content}
    </div>
  );
};

export default App;
