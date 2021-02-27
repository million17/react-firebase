import React, { useState } from 'react'
import firebase from '../utils/firebase';
export default function Form() {
    const [title, setTitle] = useState('');

    const handleOnchange = (e) => {
        setTitle(e.target.value)
    }

    const createTodo = () => {
        const todoRef = firebase.database().ref('Todo');
        const todo = {
            title,
            complete: false,
        }
        todoRef.push(todo);
    }

    return (
        <div>
            <input type="text" onChange={handleOnchange} value={title} />
            <button onClick={createTodo}>Create Todo</button>
        </div>
    )
}
