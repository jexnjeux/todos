import React from 'react';

const TodosStatus = () => {
  return (
    <div className='TodosStatus'>
      <div className='leftItems'>5 items left</div>
      <div className='statusSortGroup'>
        <a href='#' className='statusSort'>
          All
        </a>
        <a href='#' className='statusSort'>
          Active
        </a>
        <a href='#' className='statusSort'>
          completed
        </a>
      </div>
      <a href='#' className=''>
        Clear completed
      </a>
    </div>
  );
};

export default TodosStatus;
