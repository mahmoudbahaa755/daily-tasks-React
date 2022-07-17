import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
   
  ]);
  const deleteSelectedGoalByID = (id) => {
    setCourseGoals(courseGoals.filter(e => e.id !== id));

  }
  const selectedTaskDoneByID = (id ,done) => {
    setCourseGoals(courseGoals.map((e,i) => {
      if (e.id === id) {
        if(e.done === false){
        e.done =true;
      }
      else{
        e.done =false;

      }
    }
      return e;
    }));
  }
  let content = (
      <CourseGoalList courseGoals={courseGoals} selectedTaskDoneByID={selectedTaskDoneByID} deleteSelectedGoalByID={deleteSelectedGoalByID} />
    )
  if(courseGoals.length === 0){
    
     content= (<p style={{ textAlign: 'center'}}>No goals found. Maybe start adding now?</p>)
  }
  const addGoal = goal =>{
    setCourseGoals(prevGoals =>{
      return [{id: Math.random().toString() ,goal:goal ,done:false} , ...prevGoals]
    })
  }
  
  

  return (
    <div>
      <CourseInput addGoal={addGoal} />
      {content}
    </div>
  );
};

export default App;
