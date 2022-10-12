import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from "./components/Nav";
import Users from "./pages/Users";

// import Todo from './components/Todo';
// import Title from './components/Title';
// import Modal from './components/Modal';
// import Counter from './components/Counter';
// import React, { useEffect, useState } from 'react';

function App() {

  // function onTodoDelete() {
  //   setShowModal(true)
  // }

  //   function cancelModal() {
  //     setShowModal(false)
  //   }

  //   function confirmModal() {
  //     setShowModal(false)
  //   }

  // let isModalOpen = false;

  // function toggleModal() {
  //   isModalOpen = !isModalOpen
  //   console.log(isModalOpen)
  // }

  

  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   console.log('ONLY on mount')
  // }, [])

  // useEffect(() => {
  //   console.log(`on mount AND on ${showModal} change`)
  // }, [showModal])

  // useEffect(() => {
  //   console.log('EVERY render')
  // }, [])
  
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Users />} />
        </Routes>
      </Router>

    // <div>
    //   <Title />
    //   <div>
    //     <input type="text" onChange={(event) => {
    //       console.log(event.target.value)
    //     }}/>
    //     <button onClick={() => setShowModal(true)}>Add Todo</button>
    //   </div>
    //   <div className="todo__wrapper">
    //     <Todo onTodoDelete={onTodoDelete} title="Finish FES"/>
    //     <Todo onTodoDelete={onTodoDelete} title="Finish Interview Secion"/>
    //     <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job"/>
    //   </div>
    //   <div>
    //     {/* it was first :
    //     {isModalOpen ? <Modal title= "Confirm Delete ?" /> : null} */}
    //     {showModal && <Modal 
    //     cancelModal={cancelModal}
    //     confirmModal={confirmModal}
    //     title= "Confirm Delete ?" />}
    //   </div>
    // </div>
  );
}

export default App;
