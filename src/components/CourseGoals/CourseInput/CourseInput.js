import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
const [inputGoal, setInputGoal] = useState('');
const addClosureGoal = e =>{
  setInputGoal(e.target.value);

}
const submitClosureGoal = e =>{
  props.addGoal(inputGoal);

setInputGoal('')
}
      return (
        // <form onClick={submitClosureGoal}>

        <div className='course-input'>
          <h2>Course Goal</h2>
          <input type='text' className='input-goal' value={inputGoal} onChange={addClosureGoal} placeholder='Enter a course goal' />
           <button onClick={submitClosureGoal}  type='submit'  className="button" >
        Add Goal
    </button>
        </div>
        // </form>

      );
}

export default CourseInput;
