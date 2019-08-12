import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

function App() {
  return (
      <>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
      </>
  );
}

export default App;
