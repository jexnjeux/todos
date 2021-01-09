import React from 'react';

const TodosTeamplate = ({ children }) => {
  return (
    <div className='TodosTemplate'>
      <header>
        <div className='todoTitle'>todos</div>
      </header>
      <section>
        <div className='container'>
          <div className='contentWrapper'>
            <div className='content'>{children}</div>
          </div>
          <div className='bookEffectBottom'></div>
          <div className='bookEffectMiddle'></div>
        </div>
      </section>
    </div>
  );
};

export default TodosTeamplate;
