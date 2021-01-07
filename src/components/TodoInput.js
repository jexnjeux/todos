import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

const TodoInput = () => {
  return (
    <form className='TodoInput'>
      <BiChevronDown className='inputIcon' />
      <input placeholder='What needs to be done?' />
    </form>
  );
};

export default TodoInput;
