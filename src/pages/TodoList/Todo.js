import React, { useState } from 'react';

const Todo = ({ todo, change }) => {
  const [todo1, setTodo1] = useState({ title: '', content: '' });
  const [isVisible, setIsVisible] = useState(true);
  const { title, id, content } = todo;
  const token = localStorage.getItem('toekn');

  const update = e => {
    const { value, name } = e.target;
    setTodo1({
      ...todo1,
      [name]: value,
    });
  };

  const deleteTodo = () => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  const updateTodo = () => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        title: todo1.title,
        content: todo1.content,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setIsVisible(!isVisible);
      });
  };
  return (
    <form>
      {isVisible === true ? (
        <div>
          <div>{title}</div>
          <div>{content}</div>
          <button
            type="button"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            수정
          </button>
          <button type="button" onClick={deleteTodo}>
            삭제
          </button>
        </div>
      ) : (
        <div>
          <input
            name="title"
            type="text"
            placeholder={title}
            value={todo1.title}
            onChange={update}
          />
          <input
            name="content"
            type="text"
            placeholder={content}
            value={todo1.content}
            onChange={update}
          />
          <button type="button" onClick={updateTodo}>
            수정완료
          </button>
        </div>
      )}
    </form>
  );
};

export default Todo;
