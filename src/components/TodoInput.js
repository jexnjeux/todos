import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const TodoInput = ({ todos, setTodos, completedAll }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTodos([
        {
          id: todos.length + 1,
          task: inputValue,
          completed: false,
        },
        ...todos,
      ]);
      setInputValue('');
    }
  };

  const handleCompleted = () => {
    if (todos.filter((todo) => !todo.completed)) {
      setTodos((todos) =>
        todos.map((todo) => {
          return { ...todo, completed: true };
        })
      );
    }
    if (todos.filter((todo) => !todo.completed).length === 0) {
      setTodos((todos) =>
        todos.map((todo) => {
          return { ...todo, completed: false };
        })
      );
    }
  };

  return (
    <form className='TodoInput'>
      <BiChevronDown
        className={completedAll ? 'checkedAllIcon' : 'checkAllIcon'}
        onClick={handleCompleted}
      />
      <input
        placeholder='What needs to be done?'
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </form>
  );
};

export default TodoInput;
