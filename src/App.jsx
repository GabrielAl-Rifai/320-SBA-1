import { useState } from 'react'
import './App.css'
// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./components/Nav";


export default function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/" element={<About />}/>
        <Route path="/" element={<API />}/>
        <Route path="/" element={<Meals />}/>
      </Routes>
    </div>
  );
}
