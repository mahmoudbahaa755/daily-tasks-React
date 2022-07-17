import React, { useState } from 'react';
import EmptyGoalEror from '../../FloatingWindow/EmptyGoalEror';
import './CourseInput.css';

const CourseInput = (props) => {
const [inputGoal, setInputGoal] = useState('');
const [emptyGoalError, setEmptyGoalError] = useState(false);
const addClosureGoal = e =>{
  setInputGoal(e.target.value);

}
const submitClosureGoal = e =>{
  console.log('clicked')

  if(inputGoal.trim().length === 0){
    setEmptyGoalError(true);
  }
  else{
  setEmptyGoalError(false);

  }
  if(inputGoal.trim().length > 0){
  props.addGoal(inputGoal);
  setInputGoal('')
  }
}

      return (

        <div className='course-input'>
    {emptyGoalError === true ?( <EmptyGoalEror errorOrNot={emptyGoalError} />) : (<span></span>)}
    {/* <EmptyGoalEror errorOrNot={emptyGoalError}/> */}
          <h2>Day Goals</h2>
          <input type='text' className='input-goal' value={inputGoal} onChange={addClosureGoal} placeholder='Enter your day goal' />
           <button onClick={submitClosureGoal}  type='submit'  className="button" >
        Add Goal
    </button>
        </div>
      );
}

export default CourseInput;
