import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState({ title: '', content: '' });
  const [todoList, setTodoList] = useState([]);
  const { title, content } = todos;

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:8080/todos', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setTodoList(data.data);
      });
  }, []);

  const change = e => {
    const { value, name } = e.target;
    setTodos({
      ...todos,
      [name]: value,
    });
  };

  const createToDo = () => {
    fetch('http://localhost:8080/todos', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        {todoList.map(todo => {
          return <Todo todo={todo} key={todo.id} change={change} />;
        })}
      </div>
      <form>
        <input name="title" type="text" value={title} onChange={change} />
        <input name="content" type="text" value={content} onChange={change} />
        <button type="button" onClick={createToDo}>
          등록
        </button>
      </form>
    </div>
  );
};

export default TodoList;
