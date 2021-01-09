import React from 'react';

const TodosStatus = ({ todos, setTodos, navMenus, Menus, handleNavMenus }) => {
  const clearTodo = () => {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  };

  return (
    <div className='TodosStatus'>
      <div>{todos?.filter((todo) => !todo.completed).length} items left</div>
      <div className='statusMenuGroup'>
        <ul>
          {Object.keys(Menus).map((menu, i) => {
            return (
              <li key={i}>
                <a
                  href='#'
                  name={menu}
                  className={
                    navMenus[menu] ? 'selectedStatusMenu' : 'statusMenu'
                  }
                  onClick={handleNavMenus}
                >
                  {menu}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <a href='#' onClick={clearTodo}>
        Clear completed
      </a>
    </div>
  );
};

export default TodosStatus;
