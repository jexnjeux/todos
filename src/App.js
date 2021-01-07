import './App.scss';
import TodosTeamplate from './components/TodosTeamplate';
import TodoInput from './components/TodoInput';
import TodoListItem from './components/TodoListItem';
import TodosStatus from './components/TodosStatus';

function App() {
  return (
    <div className='App'>
      <TodosTeamplate>
        <TodoInput />
        <TodoListItem />
        <TodosStatus />
      </TodosTeamplate>
    </div>
  );
}

export default App;
