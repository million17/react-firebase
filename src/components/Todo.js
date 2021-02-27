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
        <div>
            {todo.title}
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={completeTodo}>Complete</button>

        </div>
    )
}
