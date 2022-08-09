import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Main from './pages/Main/Main';
import TodoList from './pages/TodoList/TodoList';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
