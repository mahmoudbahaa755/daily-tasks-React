import React, { useState } from 'react';
import EmptyGoalEror from '../../FloatingWindow/EmptyGoalEror';
import './CourseInput.css';

const CourseInput = (props) => {
const [inputGoal, setInputGoal] = useState('');
const [emptyGoalError, setEmptyGoalError] = useState(true);
const addClosureGoal = e =>{
  setInputGoal(e.target.value);

}
const submitClosureGoal = e =>{
  console.log('clicked')
  if(inputGoal.trim().length === 0){
    setEmptyGoalError(false);
  }
  else{
  }
  if(inputGoal.trim().length > 0){
  props.addGoal(inputGoal);
  setInputGoal('')
  }
}

      return (

        <div className='course-input'>
          <h2>Day Goals</h2>
          <input type='text' className='input-goal' value={inputGoal} onChange={addClosureGoal} placeholder='Enter your day goal' />
           <button onClick={submitClosureGoal}  type='submit'  className="button" >
        Add Goal
    </button>
    <EmptyGoalEror errorOrNot={emptyGoalError}/>
        </div>

      );
}

export default CourseInput;
