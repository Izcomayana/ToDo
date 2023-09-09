import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import TodoView from './pages/ToDoView';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/todo/:id' element={<TodoView />}/>
      </Routes>
    </>
  );
}

export default App;
