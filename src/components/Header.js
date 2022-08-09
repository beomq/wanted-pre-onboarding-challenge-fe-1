import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const deleteToken = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <HeaderWrapper>
      {token ? (
        <button type="button" onClick={deleteToken}>
          Logout
        </button>
      ) : (
        <>
          <button
            type="button"
            onClick={() => {
              navigate('/login');
            }}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Signup
          </button>
        </>
      )}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  height: 100px;
  background-color: gray;
  color: black;
`;
