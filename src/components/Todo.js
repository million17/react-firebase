import React from 'react'
import firebase from '../utils/firebase'
export default function Todo({ todo }) {

    /**
     * Delete Todo where id 
     */
    const deleteTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id)
        todoRef.remove();
    }

    /**
     * Complete Todo change status complete true <-> false
     */
    const completeTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id)
        todoRef.update({
            complete: !todo?.complete,
        })

    }

    return (
        <div className="todo">
            
            <h2 className={todo.complete ? 'text-line-through' : ''}>{todo.title}</h2>
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={completeTodo} className={todo.complete ? 'button-true' : 'button-false'}>Complete</button>

        </div>
    )
}
