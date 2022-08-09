import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({ id: '', pw: '' });
  const navigate = useNavigate();
  const { id, pw } = userData;
  const activeBtn = id.includes('@' && '.') && pw.length >= 8;

  const token = localStorage.getItem('token');

  const change = e => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleId = () => {
    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message === '성공적으로 로그인 했습니다') {
          if (data.token === token) {
            navigate('/todolist');
          } else {
            localStorage.setItem('token', data.token);
            navigate('/todolist');
          }
        } else {
          alert('로그인에 실패 했습니다');
          navigate(0);
        }
      });
  };

  return (
    <LoginWrap>
      <IdInput name="id" type="text" onChange={change} value={id} />
      <PwInput name="pw" type="password" onChange={change} value={pw} />
      <LoginBtn
        type="button"
        disabled={activeBtn ? false : true}
        onClick={handleId}
      >
        Login
      </LoginBtn>
    </LoginWrap>
  );
};

const LoginWrap = styled.form`
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const IdInput = styled.input`
  width: 100px;
`;

const PwInput = styled.input`
  width: 100px;
`;

const LoginBtn = styled.button`
  width: 100px;
  background-color: blue;
  &:disabled {
    background-color: white;
  }
`;

export default Login;
