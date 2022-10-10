import './App.css';
import Todo from './components/Todo';
import Title from './components/Title';
import Modal from './components/Modal';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {

  function onTodoDelete() {
    setShowModal(true)
    console.log('onTodoDelete()')
  }

    function removeModal() {
      setShowModal(false)
      console.log('removeModal()')
    }

  // let isModalOpen = false;

  // function toggleModal() {
  //   isModalOpen = !isModalOpen
  //   console.log(isModalOpen)
  // }

  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish FES"/>
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Secion"/>
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job"/>
      </div>
      <div>
        {/* it was first :
        {isModalOpen ? <Modal title= "Confirm Delete ?" /> : null} */}
        {showModal && <Modal removeModal={removeModal} title= "Confirm Delete ?" />}
      </div>
    </div>
  );
}

export default App;
