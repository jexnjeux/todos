import React from 'react';
import { GiCircle } from 'react-icons/gi';
import { FiX } from 'react-icons/fi';

const TodoListItem = () => {
  return (
    <div className='TodoListItem'>
      <GiCircle className='activeIcon' />
      <div className='itemText'>투두투두투두투두</div>
      <FiX className='deleteIcon' />
    </div>
  );
};

export default TodoListItem;
