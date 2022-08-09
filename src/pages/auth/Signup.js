import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userData, setUserData] = useState({ id: '', pw: '' });
  const navigate = useNavigate();

  const { id, pw } = userData;
  const activeBtn = id.includes('@' && '.') && pw.length >= 8;

  const createId = () => {
    navigate('/login');
  };

  const change = e => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleId = () => {
    fetch('http://localhost:8080/users/create', {
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
        createId();
      });
  };

  return (
    <div>
      <SignupWrap>
        <IdInput name="id" type="text" onChange={change} value={id}></IdInput>
        <PwInput
          name="pw"
          type="password"
          onChange={change}
          value={pw}
        ></PwInput>
        <SignupBtn
          type="button"
          disabled={activeBtn ? false : true}
          onClick={handleId}
        >
          Signup
        </SignupBtn>
      </SignupWrap>
    </div>
  );
};

const SignupWrap = styled.form`
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

const SignupBtn = styled.button`
  width: 100px;
  background-color: blue;
  &:disabled {
    background-color: white;
  }
`;

export default Signup;
