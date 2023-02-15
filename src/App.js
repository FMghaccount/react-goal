import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  // const [editValue, setEditValue] = useState({});
  const [editValue, setEditValue] = useState('');
  const [courseGoals, setCourseGoals] = useState([
    { text: 'هدف 1', id: 'g1' },
    { text: 'هدف 2', id: 'g2' }
  ]);
  // console.log(courseGoals);

  const addGoalHandler = enteredText => {
    if (enteredText) {
      setCourseGoals(prevGoals => {
        const updatedGoals = [...prevGoals];
        updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
        return updatedGoals;
      });
    }
  };
  const editGoalHandler = (enteredText) => {
    if (enteredText) {
      setCourseGoals(prevGoals => {
        let goals = [...prevGoals];
        goals.find(goal => goal.id === editValue[0].id).text = enteredText;
        return goals;
      });
      setEditValue('');
    }
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);

      return updatedGoals;
    });
  };

  const editItemHandler = goalId => {
    // const goal = courseGoals.filter(goal => goal.id === goalId);
    // console.log(goal);
    // setEditValue({ text: goal.text, id: goal.id });
    setEditValue(prevValue => {
      const goal = courseGoals.filter(goal => goal.id === goalId);
      prevValue = goal;
      return goal
    });
  };
  console.log(editValue);
  let content = (
    <p style={{ textAlign: 'center' }}>هدفی ثبت نشده است.</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} isEditing={editValue} onEditItem={editItemHandler} onDeleteItem={deleteItemHandler} />
    );
  }
  // console.log(courseGoals);
  return (
    <div>
      <section id="goal-form">
        <CourseInput onEditGoal={editGoalHandler} editValue={editValue ? editValue[0].text : ''} onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};



export default App;
