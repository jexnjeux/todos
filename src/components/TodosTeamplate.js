import React from 'react';

const TodosTeamplate = ({ children }) => {
  return (
    <div className='TodosTemplate'>
      <div className='todoTitle'>todos</div>
      <div className='contentWrapper'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default TodosTeamplate;
