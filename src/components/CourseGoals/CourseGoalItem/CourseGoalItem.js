import React from 'react';
import { FaTrashAlt, FaEdit } from "react-icons/fa";

import './CourseGoalItem.css';

const CourseGoalItem = props => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  const editHandler = () => {
    props.onEdit(props.id);
  };

  let editingItemId;
  if (props.isEditing) {
    editingItemId = props.isEditing[0].id
  }



  return (
    <li className={props.isEditing && props.id === editingItemId ? 'goal-item item-editing-div' : 'goal-item'}>
      <span style={{ wordWrap: 'break-word', width: '85%' }}>{props.children}</span>
      <div className='item-icons'>
        <FaTrashAlt style={{ cursor: 'pointer' }} size={20} onClick={deleteHandler} />
        <FaEdit style={{ cursor: 'pointer' }} size={20} onClick={editHandler} />
      </div>
    </li>
  );
};

export default CourseGoalItem;
