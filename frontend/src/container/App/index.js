import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
// import { getUser } from "./reducer";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import SignupPage from '../SignupPage';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import "./App.css";

function App() {
  // const dispatch = useDispatch();
  useEffect(() => {

  }, []);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Routes>
      <ToastContainer />
    </React.Fragment>
  )
}

export default App;
