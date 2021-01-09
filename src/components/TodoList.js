import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, setTodos, navMenus }) => {
  const { Active, Completed } = navMenus;
  return (
    <div className='TodoList'>
      <ul>
        {todos
          ?.filter((todo) => {
            if (Active) {
              return !todo.completed;
            }
            if (Completed) {
              return todo.completed;
            }
            return true;
          })
          .map((todo) => {
            return (
              <li key={todo.id}>
                <TodoListItem
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  id={todo.id}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
