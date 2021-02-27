import React, { useEffect, useState } from 'react'
import firebase from '../utils/firebase'
import Todo from './Todo';

export default function TodoList() {

    const [todoList, setTodoList] = useState();

    useEffect(() => {
        const todoRef = firebase.database().ref('Todo');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] })
            }
            setTodoList(todoList);
        })
    }, [])

    return (
        <div>
            {todoList ? todoList.map((todo, i) => <Todo todo={todo} key={i} />) : ''}
        </div>
    )
}
