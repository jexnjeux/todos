import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodosTeamplate from './components/TodosTeamplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodosStatus from './components/TodosStatus';
import './App.scss';

function App() {
  const [todos, setTodos] = useState();
  const [completedAll, setCompletedAll] = useState(false);

  const Menus = {
    All: true,
    Active: false,
    Completed: false,
  };

  const [navMenus, setNavMenus] = useState(Menus);

  const handleNavMenus = (e) => {
    const { name } = e.target;
    setNavMenus({
      All: false,
      Active: false,
      Completed: false,
      [name]: true,
    });
  };

  useEffect(() => {
    const getTodoData = async () => {
      const result = await axios.get(`../data/TodoData.json`);
      setTodos(result.data.reverse());
    };
    getTodoData();
  }, []);

  useEffect(() => {
    const handleCompletedIcon = () => {
      if (todos?.filter((todo) => !todo.completed).length === 0) {
        setCompletedAll(true);
      } else {
        setCompletedAll(false);
      }
    };
    handleCompletedIcon();
  }, [todos]);

  return (
    <div className='App'>
      <TodosTeamplate>
        <TodoInput
          todos={todos}
          setTodos={setTodos}
          completedAll={completedAll}
        />
        <TodoList todos={todos} setTodos={setTodos} navMenus={navMenus} />
        <TodosStatus
          todos={todos}
          setTodos={setTodos}
          navMenus={navMenus}
          Menus={Menus}
          handleNavMenus={handleNavMenus}
        />
      </TodosTeamplate>
    </div>
  );
}

export default App;
