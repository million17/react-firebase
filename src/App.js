import React from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList';
import './App.css'

export default function App() {
 
  return (
    <div className="mainTodo">
      <p>Demo Firebase Wep Application</p>
      <Form />
      <TodoList />
    </div>
  )
}
