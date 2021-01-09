import React, { useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { BiCircle } from 'react-icons/bi';
import { FiX } from 'react-icons/fi';

const TodoListItem = ({ id, todo, setTodos, todos }) => {
  const { task, completed } = todo;
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const checkTodo = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = () => {
    setEditable(!editable);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTodos((todos) =>
        todos.map((todo) => {
          return todo.id === id ? { ...todo, task: inputValue } : todo;
        })
      );
      setEditable(!editable);
    }
  };

  return (
    <div className='TodoListItem'>
      {completed ? (
        <BiCheckCircle className='completedIcon' onClick={checkTodo} />
      ) : (
        <BiCircle className='activeIcon' onClick={checkTodo} />
      )}
      {editable ? (
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <div
          className={completed ? 'completedText' : 'activeText'}
          onDoubleClick={editTodo}
        >
          {task}
        </div>
      )}
      <FiX className='deleteIcon' onClick={deleteTodo} />
    </div>
  );
};

export default TodoListItem;
