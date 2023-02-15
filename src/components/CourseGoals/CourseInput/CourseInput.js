import React, { useState, useEffect } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(true);
  console.log(props.editValue);
  useEffect(() => {
    if (props.editValue) { setEnteredValue(props.editValue); setIsValid(true) }
  }, [props.editValue])


  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    if (props.editValue) {
      props.onEditGoal(enteredValue);
    }
    else {
      props.onAddGoal(enteredValue);
    }
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>هدف</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">ثبت</Button>
    </form >
  );
};

export default CourseInput;
